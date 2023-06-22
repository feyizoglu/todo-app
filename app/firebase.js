// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUf5EmFr9mVSgfOXzl1Ld0r_p8X13xSrE",
  authDomain: "todo-app-ae79c.firebaseapp.com",
  projectId: "todo-app-ae79c",
  storageBucket: "todo-app-ae79c.appspot.com",
  messagingSenderId: "954863995451",
  appId: "1:954863995451:web:74ce5a9162e06ac027aa1e",
  measurementId: "G-5H3MP45F8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
