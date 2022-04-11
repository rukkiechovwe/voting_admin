import { validateEmail } from "../../utils/validators";

export const ValidationRules = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Incorrect Email";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be atleast 8 characters";
  }
  return errors;
};
