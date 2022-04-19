import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, firestore_collection, firestore_addDoc } from "../../firebase";

const usePollForm = (validationRules) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [candidates, setCandidates] = useState([
    {
      name: "",
      image: null,
    },
  ]);
  const navigate = useNavigate();

  //   const createPoll = async () => {};

  const handleChange = (event, index) => {
    event.preventDefault();
    candidates[index].name = event.target.value;
    console.log(candidates);
  };
  const handleImage = (event, index) => {
    event.preventDefault();
    candidates[index].image = event.target.files[0];
    console.log(candidates);
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
    if (Object.keys(validationRules(values)).length === 0) {
      setLoading(true);
      // createPoll();
    } else {
      setErrors(validationRules(values));
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleImage,
    addCandidate,
    candidates,
    values,
    errors,
    loading,
  };
};

export default usePollForm;
