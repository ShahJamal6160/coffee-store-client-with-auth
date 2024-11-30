// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDvrmGp9XnjNDvYz2KINBitYJOJ2ltvVw",
  authDomain: "coffee-store-d10d1.firebaseapp.com",
  projectId: "coffee-store-d10d1",
  storageBucket: "coffee-store-d10d1.firebasestorage.app",
  messagingSenderId: "637040578223",
  appId: "1:637040578223:web:c00c2c2984d2633a724e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);