// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf-jYmeblmHW-bFkLdiHj1lJKE7SSIXz0",
  authDomain: "grocerybuddy-6bdb6.firebaseapp.com",
  projectId: "grocerybuddy-6bdb6",
  storageBucket: "grocerybuddy-6bdb6.appspot.com", // ✅ Fixed this
  messagingSenderId: "1047437779574",
  appId: "1:1047437779574:web:79d87cfbaca0b7a1c1f557",
  measurementId: "G-TS3VE4RPHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add auth initialization
const auth = getAuth(app);

export { auth };
