import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  db,
  storage,
  firestore_setDoc,
  firestore_doc,
  firestore_ref,
  firestore_uploadBytes,
  firestore_getDownloadURL,
} from "../../firebase";

const usePollForm = (
  validationRules,
  candidateValidationRules,
  electionYear
) => {
  //   const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [candidateFieldErrors, setCandidateFieldErrors] = useState([]);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [candidates, setCandidates] = useState([
    {
      name: "",
      image: null,
      votes: 0,
    },
  ]);

  const addCandidate = (event) => {
    event.preventDefault();
    const newCandidate = {
      name: "",
      image: null,
      votes: 0,
    };
    setCandidates((candidates) => [...candidates, newCandidate]);
  };

  const createPoll = async () => {
    candidates.forEach(async (candidate) => {
      const storageRef = firestore_ref(
        storage,
        `${electionYear}_candidates/${candidate.name.split(" ").join("_")}`
      );
      await firestore_uploadBytes(storageRef, candidate.image)
        .then((_) => {
          firestore_getDownloadURL(firestore_ref(storage, storageRef)).then(
            async (url) => {
              const uploadCandidate = {
                ...candidate,
                imageUrl: url,
                pollName: values.pollName,
              };
              delete uploadCandidate.image;

              const docRef = firestore_doc(
                db,
                electionYear, // root collection
                "candidates", // documentId
                `${electionYear}_candidates`, // subcollection
                `${uploadCandidate.name.split(" ").join("_")}` // subcollection-documentId
              );
              await firestore_setDoc(docRef, uploadCandidate);
            }
          );
        })
        .catch((error) => {
          console.log(error);
         //  console.log(error.message);
        });

      //   not working, i don't know why
      // await navigate(0);
    });
  };

  /// index is -1 for non-candidate fields
  const handleChange = (event, index) => {
    event.preventDefault();
    if (index === -1) {
      setValues({ ...values, [event.target.name]: event.target.value });
    } else {
      candidates[index].name = event.target.value;
      setCandidates([...candidates]);
    }
  };

  const handleImage = (event, index) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fileSize = Math.round(file / 1024);
    let isSize = false;
    let isType = false;

   //  console.log(file);

    //  check file size
    if (fileSize >= 4096) {
      setCandidateFieldErrors(
        candidates.map((candidate) => {
          return (candidate.image =
            "Image too Big, please select an image less than 4mb");
        })
      );
    } else {
      isSize = true;
    }

    //  check file type
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      isType = true;
    } else {
      setCandidateFieldErrors(
        candidates.map((candidate) => {
          return (candidate.image =
            "Image type not supported, please select a jpg, jpeg or png image");
        })
      );
    }

    //  if the file size and type conditions are met, upload the file
    if (isSize && isType) {
      candidates[index].image = file;
    }

    setCandidates([...candidates]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setCandidateFieldErrors([]);
    let pollValid = true;
    let candidatesValid = true;
    if (Object.keys(validationRules(values)).length !== 0) {
      setErrors(validationRules(values));
      pollValid = false;
    }
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (Object.keys(candidateValidationRules(candidate)).length !== 0) {
        setCandidateFieldErrors(
          candidates.map((candidate) => candidateValidationRules(candidate))
        );
        candidatesValid = false;
      }
    }

    // if all valid, create poll
    if (pollValid && candidatesValid) {
      setLoading(true);
      await createPoll();
      setLoading(false);
      // navigate(0);
    } else {
      console.log(errors);
      // console.log(pollValid);
      // console.log(candidatesValid);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleImage,
    addCandidate,
    candidates,
    errors,
    values,
    candidateFieldErrors,
    loading,
  };
};

export default usePollForm;
