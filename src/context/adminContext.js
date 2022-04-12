import React, { useEffect, useState } from "react";
import { db, firestore_collection, firestore_getDocs } from "../firebase";

export const AdminContext = React.createContext();

function AdminContextProvider({ children }) {
  const [adminList, setAdminList] = useState([]);

  const getAdminList = async () => {
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, "admin")
    );
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
      // console.log(doc.data());
    });
    setAdminList(data);
  };

  useEffect(() => {
    getAdminList();
  }, []);

  return (
    <AdminContext.Provider value={{ adminList }}>
      {children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;
