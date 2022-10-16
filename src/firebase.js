import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
// NOTES
// reference a collection using
// collection(db, "collectionName"), the number of paths of a collection must
// be an odd number eg
// 1. collection(db, "collectionName")
// 2. collection(db, "collectionName", "documentId1", "collectionName2")

// reference a document using
// doc(db, "collectionName1", "documentId"), the number of paths of a document must
// be an even number eg
// 1. doc(db, "collectionName", "documentId")
// 2. doc(db, "collectionName1", "documentId1", "collectionName2", "documentId2")
export const firestore_collection = collection;
export const firestore_setDoc = setDoc;
export const firestore_addDoc = addDoc;
export const firestore_doc = doc;
export const firestore_updateDoc = updateDoc;
export const firestore_arrayUnion = arrayUnion;
export const firestore_getDoc = getDoc;
export const firestore_getDocs = getDocs;
export const firestore_ref = ref;
export const firestore_uploadBytes = uploadBytes;
export const firestore_getDownloadURL = getDownloadURL;
export const firestore_query = query;
export const firestore_orderBy = orderBy;
export const firestore_limit = limit;
