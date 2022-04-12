import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

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

export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const firestore_collection = collection;
export const firestore_addDoc = addDoc;
export const firestore_getDoc = getDoc;
export const firestore_getDocs = getDocs;
