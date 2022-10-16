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
  const [loading, setLoading] = useState(true);
  const [electionYear, setElectionYear] = useState("");
  const [elections, setElections] = useState([]);
  const [electionDetail, setElectionDetail] = useState({});
  const [candidatesDetail, setCandidatesDetail] = useState([]);
  const [votes, setVotes] = useState([]);
  const [students, setStudents] = useState([]);

  const getElectionDetail = async (year) => {
    setLoading(true);
    const docRef = firestore_doc(db, year, "Metadata");
    const docSnap = await firestore_getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setElectionDetail(docSnap.data());
      setLoading(false);
    } else {
      setLoading(false);
      // console.log("No such document!");
    }
  };

  const getCandidatesDetail = async (year) => {
    setLoading(true);
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, year, "candidates", `${year}_candidates`)
    );
    setCandidatesDetail(querySnapshot.docs.map((doc) => doc.data()));
    setLoading(false);
   //  console.log("candidates", candidatesDetail);
  };

  const getvotes = async (year) => {
    setLoading(true);
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, year, "vote_entries", `${year}_vote_entries`)
    );
    setVotes(querySnapshot.docs.map((doc) => doc.data()));
    setLoading(false);
    console.log("vote_entries", votes);
  };

  const getElectionYear = (year) => {
    setElectionYear(year);
  };

  const getElections = async () => {
    setLoading(true);
    setElections([]);
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, "elections")
    );
    querySnapshot.forEach(async (doc) => {
      let year = doc.data();
      year.years.forEach(async (item) => {
        const docRef = firestore_doc(db, item, "Metadata");
        const docSnap = await firestore_getDoc(docRef);

        if (docSnap.exists()) {
          setElections((elections) => [...elections, docSnap.data()]);
        } else {
         //  console.log("No such document!");
        }
      });
    });
    setLoading(false);
  };

  const getStudents = async (year) => {
    setLoading(true);
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, year, "students", `${year}_students`)
    );
    setStudents(querySnapshot.docs.map((doc) => doc.data()));
    setLoading(false);
  };

  useEffect(() => {
    getElections();
  }, [electionYear]);

  return (
    <ElectionContext.Provider
      value={{
        electionYear,
        getElectionYear,
        electionDetail,
        elections,
        candidatesDetail,
        votes,
        students,
        loading,
        getStudents,
        getElectionDetail,
        getCandidatesDetail,
        getvotes,
      }}
    >
      {children}
    </ElectionContext.Provider>
  );
}
export default ElectionContextProvider;
