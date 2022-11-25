import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz4sDkyd-0-Ze7d-M7jUgUBaKRjYJ4n8E",
    authDomain: "virtualmusicschool-b82e8.firebaseapp.com",
    projectId: "virtualmusicschool-b82e8",
    storageBucket: "virtualmusicschool-b82e8.appspot.com",
    messagingSenderId: "90201092352",
    appId: "1:90201092352:web:3b2208d17d47ce824343e5"
  };



  export const app = initializeApp(firebaseConfig);


  export const auth = getAuth();

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };