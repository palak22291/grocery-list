import { initializeApp } from "Firebase/app";
import { getAuth } from "Firebase/auth";

const FirebaseConfig = {
  apiKey: "AIzaSyB9f-ymebIMhW-bFkLidjh1J1JkE7SStXz0",
  authDomain: "grocerybuddy-6bdb6.firebaseapp.com",
  projectId: "grocerybuddy-6bdb6",
  storageBucket: "grocerybuddy-6bdb6.appspot.com",
  messagingSenderId: "1047437779574",
  appId: "1:1047437779574:web:79d87cfbaca0b7a1cff557",
  measurementId: "G-T3SVE4RPHC"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig)


// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
