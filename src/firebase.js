
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA104EeNVOMR79uEpveIHDGj9-71Z6lDlQ",
  authDomain: "myporftolio-tr1.firebaseapp.com",
  projectId: "myporftolio-tr1",
  storageBucket: "myporftolio-tr1.appspot.com",
  messagingSenderId: "180122403617",
  appId: "1:180122403617:web:1c66164ce9ff6395597460",
  measurementId: "G-8KSJSXY2TX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);