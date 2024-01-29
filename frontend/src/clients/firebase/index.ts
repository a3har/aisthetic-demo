// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv4dLTSK4KD8FS-7lJ5va2GiEd2Ow6Ls0",
  authDomain: "aisthetic-demo.firebaseapp.com",
  projectId: "aisthetic-demo",
  storageBucket: "aisthetic-demo.appspot.com",
  messagingSenderId: "53815538876",
  appId: "1:53815538876:web:08edff1c5b60cf1e10ccb9",
  measurementId: "G-W03W3F6S0J",
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app, auth, provider }
