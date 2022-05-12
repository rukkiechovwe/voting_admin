export const convertDate = (date) => {
  date = new Date(date);
  var ms = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = date.getDate();
  let month = ms[date.getMonth()];
  let year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};
export const convertTime = (time) => {
  time = new Date(time);
  let hour = time.getHours();
  let minute = time.getMinutes();
  let suffix = hour >= 12 ? "PM" : "AM";
  time.getHours() >= 12 && (hour = ((hour + 11) % 12) + 1);
  hour.toString().length < 2 && (hour = `0${hour}`);
  minute.toString().length < 2 && (minute = `0${minute}`);

  return `${hour}:${minute}${suffix}`;
};
