// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shivshakti-estate.firebaseapp.com",
  projectId: "shivshakti-estate",
  storageBucket: "shivshakti-estate.appspot.com",
  messagingSenderId: "55784597396",
  appId: "1:55784597396:web:a9ea06bb4f3e0ab9f6d181"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);