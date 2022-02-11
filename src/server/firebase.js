// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5Z-89CZKvZLVZnQFBfwi0wQT-gAtKJw",
  authDomain: "jen-coach.firebaseapp.com",
  projectId: "jen-coach",
  storageBucket: "jen-coach.appspot.com",
  messagingSenderId: "344039109561",
  appId: "1:344039109561:web:7825098c469f0286be7c68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
