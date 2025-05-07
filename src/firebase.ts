// Import the functions you need from the SDKs you need
// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNE-jQvTKlISO9cOC4YYhoHYSaFs-OJZE",
  authDomain: "school-management-system-19dc5.firebaseapp.com",
  projectId: "school-management-system-19dc5",
  storageBucket: "school-management-system-19dc5.firebasestorage.app",
  messagingSenderId: "837875657790",
  appId: "1:837875657790:web:6150738e9e02af479db56f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // ✅ This line is important
