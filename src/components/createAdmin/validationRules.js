import { validateEmail } from "../../utils/validators";

export const ValidationRules = (values) => {
  let errors = {};
  if (!values.admin_name) {
    errors.admin_name = "name is required";
  } 
//   else if (!validateText(values.admin_name)) {
//     errors.admin_name = "incorrect name";
//   }
  if (!values.admin_email) {
    errors.admin_email = "email is required";
  } else if (!validateEmail(values.admin_email)) {
    errors.admin_email = "incorrect email";
  }
  if (!values.admin_password) {
    errors.admin_password = "password is required";
  } else if (values.admin_password.length < 8) {
    errors.admin_password = "password must be atleast 8 characters";
  }
  return errors;
};
