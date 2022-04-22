import { Route, Routes } from "react-router-dom";
import Account from "../pages/account";
import AdminPage from "../pages/admin";
import Election from "../pages/election";
import Home from "../pages/home";
import StudentDetail from "../pages/studentDetail";
import StudentList from "../pages/students";
import Login from "../pages/authentication/login";

const Router = ({ hasToken }) => {
  return (
    <Routes>
      {hasToken ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/election" element={<Election />} />
          <Route path="/create-poll" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/student-detail" element={<StudentDetail />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
};
export default Router;
