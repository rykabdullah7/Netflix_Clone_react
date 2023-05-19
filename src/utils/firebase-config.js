// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAZ_q5jMKGY74Zc8rR2E1DMPLdHP6Qq34I",

  authDomain: "react-netflix-clone-91a87.firebaseapp.com",

  projectId: "react-netflix-clone-91a87",

  storageBucket: "react-netflix-clone-91a87.appspot.com",

  messagingSenderId: "274693016330",

  appId: "1:274693016330:web:372fc86b640f4a4ba248f3",

  measurementId: "G-H50PYBN5ED"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);