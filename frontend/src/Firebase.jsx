import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh1y8VO8qmOXdBGcjXrLPPO5gyK5fbKiM",
  authDomain: "snippet-39d87.firebaseapp.com",
  projectId: "snippet-39d87",
  storageBucket: "snippet-39d87.firebasestorage.app",
  messagingSenderId: "1077187113675",
  appId: "1:1077187113675:web:1dc839b4cd7be48991614e",
  measurementId: "G-YFB47GWHSB",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export  default { auth, googleProvider };
