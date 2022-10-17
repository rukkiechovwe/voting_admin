import { useState } from "react";
import {
  db,
  firestore_doc,
  firestore_setDoc,
  firestore_updateDoc,
  firestore_arrayUnion,
} from "../../firebase";

const useElectionForm = (validationRules, onClose) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  let [poll, setPoll] = useState([]);

  const editElection = async () => {
    await firestore_setDoc(firestore_doc(db, values.electionYear, "Metadata"), {
      electionYear: values.electionYear,
      startDate: values.startDate,
      endDate: values.endDate,
      startTime: values.startTime,
      endTime: values.endTime,
      minimumLevel: values.minimumLevel,
      pollsAvailable: poll,
    });
    await firestore_updateDoc(firestore_doc(db, "elections", "years"), {
      years: firestore_arrayUnion(values.electionYear),
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    if (Object.keys(validationRules(values, poll)).length === 0) {
      console.log(values, poll);
      setLoading(true);
      editElection();
      onClose()
    } else {
      setErrors(validationRules(values, poll));

      console.log(errors);
    }
  };

  return {
    handleChange,
    handleSubmit,
    setPoll,
    poll,
    errors,
    values,
    loading,
  };
};

export default useElectionForm;
