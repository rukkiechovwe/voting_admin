import { Route, Routes } from "react-router-dom";
import Account from "../pages/account";
import AdminPage from "../pages/admin";
import Elections from "../pages/elections";
import Home from "../pages/home";
import StudentDetail from "../pages/studentDetail";
import StudentList from "../pages/students";
import Login from "../pages/authentication/login";
import ElectionDetail from "../pages/electionDetail";

const Router = ({ hasToken }) => {
  return (
    <Routes>
      {hasToken ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/elections" element={<Elections />}></Route>
          <Route path="/elections/:electionYear" element={<ElectionDetail />} />
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
