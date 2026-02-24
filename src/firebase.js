// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgm3ugavKm2Bf9vcE98Ay2Q771lhRWzvM",
  authDomain: "fikri-portfolio.firebaseapp.com",
  projectId: "fikri-portfolio",
  storageBucket: "fikri-portfolio.firebasestorage.app",
  messagingSenderId: "369574621557",
  appId: "1:369574621557:web:5b0149dc0741fdf0c6e33c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const myQuotesCollection = collection(db, "my-quotes");
export { db, auth, storage, serverTimestamp, googleProvider };
