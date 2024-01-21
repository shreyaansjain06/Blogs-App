// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2ae9e.firebaseapp.com",
  projectId: "mern-blog-2ae9e",
  storageBucket: "mern-blog-2ae9e.appspot.com",
  messagingSenderId: "6293078071",
  appId: "1:6293078071:web:387d3d94f34f82ce677fb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);