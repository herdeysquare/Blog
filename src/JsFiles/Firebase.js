// src/JsFiles/Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuk9zTIutHdbVnCa1QzMDDydtVRL6B2Rc",
  authDomain: "beau-ecommerce.firebaseapp.com",
  projectId: "beau-ecommerce",
  storageBucket: "beau-ecommerce.appspot.com",
  messagingSenderId: "993132133219",
  appId: "1:993132133219:web:29e749ab8a692d4a3bb156",
  measurementId: "G-Q84N8KQFCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
