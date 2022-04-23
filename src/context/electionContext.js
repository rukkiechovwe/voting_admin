import React, { useEffect, useState } from "react";
import {
  db,
  firestore_collection,
  firestore_doc,
  firestore_getDoc,
  firestore_getDocs,
} from "../firebase";

export const ElectionContext = React.createContext();

function ElectionContextProvider({ children }) {
  const [electionYear, setElectionYear] = useState("");
  const [electionDetail, setElectionDetail] = useState({});
  const [elections, setElections] = useState([]);

  const getElectionDetail = async () => {
    const docRef = firestore_doc(db, electionYear, "Metadata");
    const docSnap = await firestore_getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setElectionDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const getElectionYear = (year) => {
    setElectionYear(year);
  };

  const getElections = async () => {
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, "elections")
    );
    const data = [];
    querySnapshot.forEach(async (doc) => {
      let year = doc.data();
      year.years.forEach(async (item) => {
        const docRef = firestore_doc(db, item, "Metadata");
        const docSnap = await firestore_getDoc(docRef);

        if (docSnap.exists()) {
          data.push(docSnap.data());
          console.log(data);
        } else {
          console.log("No such document!");
        }
      });
    });
    setElections(await data);
  };

  useEffect(() => {
    getElections();
    if (electionYear) {
      console.log(electionYear);
      getElectionDetail();
    }
  }, [electionYear]);

  return (
    <ElectionContext.Provider
      value={{ electionYear, getElectionYear, electionDetail, elections }}
    >
      {children}
    </ElectionContext.Provider>
  );
}
export default ElectionContextProvider;
