import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  db,
  storage,
  firestore_collection,
  firestore_addDoc,
  firestore_ref,
  firestore_uploadBytes,
  firestore_getDownloadURL,
} from "../../firebase";

const usePollForm = (validationRules, candidateValidationRules) => {
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
    };
    setCandidates((candidates) => [...candidates, newCandidate]);
  };
  const uploadImage = async () => {
    candidates.forEach(async (item, index) => {
      const storageRef = firestore_ref(storage, `candidates/${item.name}`);
      await firestore_uploadBytes(storageRef, item.image)
        .then((snapshot) => {
          firestore_getDownloadURL(firestore_ref(storage, storageRef)).then(
            (url) => {
            //   console.log(url);
              candidates[index].image = url;
              setCandidates([...candidates]);
            }
          );
        })
        .catch((error) => {
          console.log(error);
         //  console.log(error.message);
        });
    });
   //  console.log(candidates);
    return candidates;
  };
  const createPoll = async () => {
    await uploadImage();
    // upload poll with candidate image url
   //  console.log(candidates);
    const docRef = await firestore_addDoc(firestore_collection(db, "poll"), {
      pollName: values.pollName,
      candidates: candidates,
    });
   //  console.log("Document written with ID: ", docRef.id);
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
    candidates[index].image = event.target.files[0];
    setCandidates([...candidates]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   //  console.log(values);
    setErrors({});
    setCandidateFieldErrors([]);
    let pollValid = true;
    let candidatesValid = true;
    // validate pollname and other fields
    if (Object.keys(validationRules(values)).length !== 0) {
      setErrors(validationRules(values));
      pollValid = false;
    }
    // validate candidates
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
      createPoll();
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
