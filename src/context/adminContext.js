import React, { useEffect, useState } from "react";
import { db, firestore_collection, firestore_getDocs } from "../firebase";

export const AdminContext = React.createContext();

function AdminContextProvider({ children }) {
  const [adminList, setAdminList] = useState([]);
  const [hasToken, setHasToken] = useState(false);

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
  const getToken = (token) => {
    setHasToken(token);
  };
  useEffect(() => {
    getAdminList();
  }, []);

  return (
    <AdminContext.Provider
      value={{ adminList, hasToken, setHasToken, getToken }}
    >
      {children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;
