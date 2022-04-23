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
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6rQi-CBqaO2Ox6SJ_DbyRtnoZkStza3Y",
  authDomain: "voting-app-d2306.firebaseapp.com",
  projectId: "voting-app-d2306",
  storageBucket: "voting-app-d2306.appspot.com",
  messagingSenderId: "781492838264",
  appId: "1:781492838264:web:117d290c7a2d84b2d2b28d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;

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
