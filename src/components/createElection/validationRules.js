export const ValidationRules = (values,poll) => {
  let errors = {};
  if (!values.electionYear) errors.electionYear = "Election Year is required";
  if (!values.startDate) errors.startDate = "Start Date is required";
  if (!values.endDate) errors.endDate = "End Date is required";
  if (!values.startTime) errors.startTime = "Start Time is required";
  if (!values.endTime) errors.endTime = "End Time is required";
  if (!values.minimumLevel) errors.minimumLevel = "Minimum Level is required";
  if (!poll.length > 0) errors.poll = "Poll is required";

  return errors;
};
