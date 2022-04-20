// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbzvgCOULbqEm-XrLYVwlbH7ByqbZvTmY",
  authDomain: "react-firebase-d176a.firebaseapp.com",
  projectId: "react-firebase-d176a",
  storageBucket: "react-firebase-d176a.appspot.com",
  messagingSenderId: "12456152082",
  appId: "1:12456152082:web:b2fa4c6f6bdf318f3b9ccb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
