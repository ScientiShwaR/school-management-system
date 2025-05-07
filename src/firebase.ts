// Import the functions you need from the SDKs you need
// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// school-management-system
// const firebaseConfig = {
//   apiKey: "AIzaSyDNE-jQvTKlISO9cOC4YYhoHYSaFs-OJZE",
//   authDomain: "school-management-system-19dc5.firebaseapp.com",
//   projectId: "school-management-system-19dc5",
//   storageBucket: "school-management-system-19dc5.firebasestorage.app",
//   messagingSenderId: "837875657790",
//   appId: "1:837875657790:web:6150738e9e02af479db56f"
// };
// vue-firebase-auth - TEMP
const firebaseConfig = {
  apiKey: "AIzaSyAPSnvQHbq2UsgnhLBosvT__RMZlqOjKcw",
  authDomain: "vue-firebase-auth-66525.firebaseapp.com",
  projectId: "vue-firebase-auth-66525",
  storageBucket: "vue-firebase-auth-66525.firebasestorage.app",
  messagingSenderId: "262120530166",
  appId: "1:262120530166:web:6b22e8680a3ee412868cd7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // ✅ This line is important
