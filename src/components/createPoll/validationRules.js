export const ValidationRules = (values) => {
  let errors = {};
  if (!values.poll_name) {
    errors.poll_name = "poll name is required";
  }
  if (!values.candidate_name) {
    errors.candidate_name = "candidate name is required";
  }
  if (!values.candidate_pic) {
    errors.candidate_pic = "candidate image is required";
  }

  return errors;
};
