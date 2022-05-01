// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7q92Eb-R0Qrd4MmJuVUk65HIsSBuWAc",
  authDomain: "assignment-11-b48ac.firebaseapp.com",
  projectId: "assignment-11-b48ac",
  storageBucket: "assignment-11-b48ac.appspot.com",
  messagingSenderId: "130622324278",
  appId: "1:130622324278:web:7894b7f6ce3d8198b3e297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;