// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJHMxAgFjKVHSWxFgXY5isXVplczdnYw",
  authDomain: "m2decorators.firebaseapp.com",
  projectId: "m2decorators",
  storageBucket: "m2decorators.firebasestorage.app",
  messagingSenderId: "402744838803",
  appId: "1:402744838803:web:3bff407134c0bcf95ddb66",
  measurementId: "G-C8XCX1HEGK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
