import { Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/login";
import Election from "../pages/election";
import Home from "../pages/home";
import StudentList from "../pages/students";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/election" element={<Election />} />
      <Route path="/create-poll" element={<Home />} />
      <Route path="/account" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
