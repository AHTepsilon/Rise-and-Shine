// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Ndz52uLT23cjAwFfqSfMDtN9vkilBbg",
  authDomain: "rise-and-shine-d34d7.firebaseapp.com",
  projectId: "rise-and-shine-d34d7",
  storageBucket: "rise-and-shine-d34d7.appspot.com",
  messagingSenderId: "496674935465",
  appId: "1:496674935465:web:41de66941b389ba3238fb8",
  measurementId: "G-MRVLYN7VF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);