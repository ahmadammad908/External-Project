// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmK8dLClFDvzR4lfweYej7_NzItd7iZ5A",
  authDomain: "react-demo-01-5f33f.firebaseapp.com",
  projectId: "react-demo-01-5f33f",
  storageBucket: "react-demo-01-5f33f.appspot.com",
  messagingSenderId: "847290741047",
  appId: "1:847290741047:web:46d667c031dfda5786eab2",
  measurementId: "G-F5JXPZG37K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
