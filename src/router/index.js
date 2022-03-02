import { Route, Routes } from "react-router-dom";
import Account from "../pages/account";
import AdminPage from "../pages/admin";
import Login from "../pages/authentication/login";
import Election from "../pages/election";
import Home from "../pages/home";
import StudentDetail from "../pages/studentDetail";
import StudentList from "../pages/students";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/election" element={<Election />} />
      <Route path="/create-poll" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/student-detail" element={<StudentDetail />} />
    </Routes>
  );
};
