// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnef2KsLib5OkYUnyqwFEa_2UEUZrGQ6E",
  authDomain: "nuevonetflix-d2297.firebaseapp.com",
  projectId: "nuevonetflix-d2297",
  storageBucket: "nuevonetflix-d2297.appspot.com",
  messagingSenderId: "264544093447",
  appId: "1:264544093447:web:13e92288d9cf29ff76f1a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
