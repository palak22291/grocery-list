import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBf-jYmeblmHW-bFkLdiHj1lJKE7SSIXz0",
  authDomain: "grocerybuddy-6bdb6.firebaseapp.com",
  projectId: "grocerybuddy-6bdb6",
  storageBucket: "grocerybuddy-6bdb6.appspot.com", 
  messagingSenderId: "1047437779574",
  appId: "1:1047437779574:web:79d87cfbaca0b7a1c1f557",
  measurementId: "G-TS3VE4RPHC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

