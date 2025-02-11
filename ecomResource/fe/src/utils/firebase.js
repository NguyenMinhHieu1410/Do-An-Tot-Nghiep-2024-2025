import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDLzbq5tZ7Q5j1UNa_Cq5FEHDAs1mO1gIw",
  authDomain: "kltn2024-4026c.firebaseapp.com",
  projectId: "kltn2024-4026c",
  storageBucket: "kltn2024-4026c.firebasestorage.app",
  messagingSenderId: "106501602089",
  appId: "1:106501602089:web:5f6860ef6109807ff31538"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))