import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInUser } from "../../firebase";
import { TOKEN } from "../../utils/constants";

const useLoginForm = (validationRules) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = (e, p) => {
    signInUser(auth, e, p)
      .then((userCredential) => {
        const user = userCredential.user;
      //   console.log(user);
        localStorage.setItem(TOKEN, user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      //   console.log(error.message);
        setLoading(false);
        setErrors({ authentication: error.message });
      });
  };
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
      signIn(values.email, values.password);
    } else {
      setErrors(validationRules(values));
      console.log(errors);
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
