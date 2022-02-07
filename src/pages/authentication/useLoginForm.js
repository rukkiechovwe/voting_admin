import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { getParamByName, notify } from "../../utils/helpers";

const useLoginForm = (validationRules) => {
  const [values, setValues] = useState({}); //{email:"eeeee",password:eee""}
  const [errors, setErrors] = useState({}); // {"email":"invalid"}
  const [loading, setLoading] = useState(false);
//   const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values, 
      [event.target.name]: event.target.value
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(validationRules(values)).length === 0) {
      setErrors({});
      setLoading(true);
      // const next = getParamByName("next") || "/dashboard";
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

export default useLoginForm;
