import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
export const createUser = createUserWithEmailAndPassword
export const signInUser = signInWithEmailAndPassword;

