// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-31097.firebaseapp.com",
  projectId: "mern-estate-31097",
  storageBucket: "mern-estate-31097.appspot.com",
  messagingSenderId: "414141804238",
  appId: "1:414141804238:web:3d8b310dc3ee17e7616a9f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
