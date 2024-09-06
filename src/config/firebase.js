// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiiVgDGbE1G0rsgeoQbCBv6d-8HEPy4XQ",
    authDomain: "green-luck-34362.firebaseapp.com",
    projectId: "green-luck-34362",
    storageBucket: "green-luck-34362.appspot.com",
    messagingSenderId: "580099723061",
    appId: "1:580099723061:web:125a1d3f18a7444a14467c",
    measurementId: "G-875VQNDMV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app);
export default app