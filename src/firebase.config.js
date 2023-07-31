// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnFLy15VKHDhR7_b0PjSvgBncyQhY9Z04",
  authDomain: "maltimart-a4c4c.firebaseapp.com",
  projectId: "maltimart-a4c4c",
  storageBucket: "maltimart-a4c4c.appspot.com",
  messagingSenderId: "24881758487",
  appId: "1:24881758487:web:c44b3c1bf8de16fbf5f752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app