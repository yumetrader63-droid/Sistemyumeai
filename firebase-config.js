import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdjSzrXqc-tf8s39jrAKEo6s7aFEzW9sc",
  authDomain: "yume-trading-vip.firebaseapp.com",
  projectId: "yume-trading-vip",
  storageBucket: "yume-trading-vip.firebasestorage.app",
  messagingSenderId: "835831454916",
  appId: "1:835831454916:web:6ff5b95c217ce0a2e37d91",
  measurementId: "G-9YM6GYC4BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

