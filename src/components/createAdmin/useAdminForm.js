import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUser,
  db,
  firestore_collection,
  firestore_addDoc,
} from "../../firebase";

const useAdminForm = (validationRules) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createAdmin = async (n, e, p) => {
    createUser(auth, e, p)
      .then(async (uc) => {
        const user = uc.user;
        const docRef = await firestore_addDoc(
          firestore_collection(db, "admin"),
          {
            email: e,
            name: n,
            id: uc.user.uid,
            active: true,
            role: 2,
          }
        );
      //   console.log("Document written with ID: ", docRef.id);
        console.log(user);
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      //   console.log(error.message);
      //   console.error("Error adding document: ", e);
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
      createAdmin(values.admin_name, values.admin_email, values.admin_password);
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

export default useAdminForm;
