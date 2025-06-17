// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEu0sI22wUN35LFI2YpRMfZD45Cm6Cbco",
  authDomain: "vite-contact-70073.firebaseapp.com",
  projectId: "vite-contact-70073",
  storageBucket: "vite-contact-70073.firebasestorage.app",
  messagingSenderId: "86508946375",
  appId: "1:86508946375:web:d731093b8f7bf62be9cfe2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);