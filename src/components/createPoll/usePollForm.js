import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  db,
  storage,
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

  const createPoll = async () => {
    candidates.forEach(async (candidate) => {
      const storageRef = firestore_ref(
        storage,
        `candidates/${candidate.name.split(" ").join("_")}`
      );
      await firestore_uploadBytes(storageRef, candidate.image)
        .then((_) => {
          firestore_getDownloadURL(firestore_ref(storage, storageRef)).then(
            async (url) => {
              const uploadCandidate = { ...candidate, imageUrl: url };
              delete uploadCandidate.image;
              // NOTES
              // reference a collection using
              // collection(db, "collectionName"), the number of paths of a collection must
              // be an odd number eg
              // 1. collection(db, "collectionName")
              // 2. collection(db, "collectionName", "documentId1", "collectionName2")

              // reference a document using
              // doc(db, "collectionName1", "documentId"), the number of paths of a document must
              // be an even number eg
              // 1. doc(db, "collectionName", "documentId")
              // 2. doc(db, "collectionName1", "documentId1", "collectionName2", "documentId2")

              const docRef = doc(
                db,
                "election2022", // root collection
                "candidates", // documentId
                "2022_candidates", // subcollection
                `${uploadCandidate.name.split(" ").join("_")}` // subcollection-documentId
              );
              await setDoc(docRef, uploadCandidate);
            }
          );
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
    console.log(values);
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
      await createPoll();
      setLoading(false);
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
