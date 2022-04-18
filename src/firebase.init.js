// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtk075dAMScMeLTwzlDZXA-mH_yIsca58",
  authDomain: "world-gym-5d63a.firebaseapp.com",
  projectId: "world-gym-5d63a",
  storageBucket: "world-gym-5d63a.appspot.com",
  messagingSenderId: "147243189707",
  appId: "1:147243189707:web:ae21593b6c529032d3a24e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
