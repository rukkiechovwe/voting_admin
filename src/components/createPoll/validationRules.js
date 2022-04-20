export const ValidationRules = (values) => {
  let errors = {};
  if (!values.pollName) {
    errors.pollName = "poll name is required";
  }
  return errors;
};

export const CandidateValidationRules = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "candidate name is required";
  }
  if (!values.image) {
    errors.image = "candidate image is required";
  }

  return errors;
};
