import React, { useEffect, useState } from "react";

export const AdminContext = React.createContext();

function AdminContextProvider({ children }) {
  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    const admin_id = localStorage.getItem("admin_id");
    if (admin_id) {
    }
  }, []);

  return (
    <AdminContext.Provider value={{ adminData }}>
      {children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;
