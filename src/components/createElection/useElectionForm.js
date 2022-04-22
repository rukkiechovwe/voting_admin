import { useState } from "react";
import {
  db,
  storage,
  firestore_collection,
  firestore_addDoc,
  firestore_ref,
  firestore_uploadBytes,
  firestore_getDownloadURL,
} from "../../firebase";

const useElectionForm = (validationRules, candidateValidationRules) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  let [poll, setPoll] = useState([]);

  const createElection = async () => {
    const docRef = await firestore_addDoc(
      firestore_collection(db, `Election ${values.electionYear}`),
      {
        electionYear: values.electionYear,
        startDate: values.startDate,
        endDate: values.endDate,
        start_time: values.startTime,
        end_time: values.endTime,
        minimumLevel: values.minimumLevel,
        pollsAvailable: poll,
      }
    );
    console.log("Document written with ID: ", docRef.id);
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
      createElection();
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
