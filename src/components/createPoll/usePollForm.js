import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
              const uploadCandidate = { ...candidate, imageUrl: url };
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
         //  navigate(0);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
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
    candidates[index].image = event.target.files[0];
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
    } else {
      console.log(errors);
      console.log(pollValid);
      console.log(candidatesValid);
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
