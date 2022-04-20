import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, firestore_collection, firestore_addDoc } from "../../firebase";

const usePollForm = (validationRules, candidateValidationRules) => {
  const [loading, setLoading] = useState(false);
  const [candidateFieldErrors, setCandidateFieldErrors] = useState([]);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [candidates, setCandidates] = useState([
    {
      name: "",
      image: null,
    },
  ]);

  const navigate = useNavigate();

  const createPoll = async () => {};

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

  const addCandidate = (event) => {
    event.preventDefault();
    const newCandidate = {
      name: "",
      image: null,
    };
    setCandidates((candidates) => [...candidates, newCandidate]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
