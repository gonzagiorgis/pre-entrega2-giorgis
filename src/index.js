import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIQgVLky0ch2QTrgBWS-JNw1ZZm9kggzQ",
  authDomain: "ecomercejardinpadel.firebaseapp.com",
  projectId: "ecomercejardinpadel",
  storageBucket: "ecomercejardinpadel.appspot.com",
  messagingSenderId: "427175509100",
  appId: "1:427175509100:web:29f67fdf08976d21046c49",
};

// Initialize Firebase

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
