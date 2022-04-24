import { Route, Routes } from "react-router-dom";
import Account from "../pages/account";
import AdminPage from "../pages/admin";
import Elections from "../pages/elections";
import Overview from "../pages/overview";
import StudentDetail from "../pages/studentDetail";
import StudentList from "../pages/students";
import Login from "../pages/authentication/login";
import Polls from "../pages/polls";

const Router = ({ hasToken }) => {
  return (
    <Routes>
      {hasToken ? (
        <>
          <Route path="/" element={<Elections />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/elections" element={<Elections />}></Route>
          <Route
            path="/elections/:electionYear/overview"
            element={<Overview />}
          />
          <Route
            path="/elections/:electionYear/students"
            element={<StudentList />}
          />
          <Route path="/elections/:electionYear/polls" element={<Polls />} />
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
