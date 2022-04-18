import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUser,
  db,
  firestore_collection,
  firestore_addDoc,
} from "../../firebase";

const usePollForm = (validationRules) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialState = {
    candidateList: [],
  };
  const candidateReducer = (state = initialState, action) => {
    switch (action.type) {
      case "get":
        return action.payload;
      case "add":
        let addItems = state.items.concat(action.item);
        return {
          ...state,
          items: addItems,
        };

      case "remove":
        let removeItems = state.items.filter(
          (item) => item.id !== action.item.id
        );
        return {
          ...state,
          items: removeItems,
        };

      default:
        throw new Error("Something went wrong");
    }
  };

  const createPoll = async () => {};

  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
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
    values,
    errors,
    loading,
  };
};

export default usePollForm;
