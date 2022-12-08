// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfBXkxypS0buTRyqasP6DISPWzlFk8Zj0",
  authDomain: "mamamia-test.firebaseapp.com",
  projectId: "mamamia-test",
  storageBucket: "mamamia-test.appspot.com",
  messagingSenderId: "244257365909",
  appId: "1:244257365909:web:d920a9d41814f4c15f609c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//functions
const functions = getFunctions(getApp());

//connet to emulator
if (process.client) {
  if (window.location.hostname.includes("localhost")) {
    //connectFirestoreEmulator(db, "localhost", 8080);
    connectFunctionsEmulator(functions, "localhost", 5001);
  }
}

export { db };
