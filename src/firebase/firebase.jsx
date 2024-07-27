// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQh3NkXYIVPsZHyqG1wL1jBQ1Q7ZjJ-E",
  authDomain: "my-todo-bd251.firebaseapp.com",
  projectId: "my-todo-bd251",
  storageBucket: "my-todo-bd251.appspot.com",
  messagingSenderId: "109278369745",
  appId: "1:109278369745:web:a73ee517bdeecc793db2f0",
  measurementId: "G-8QNXRLKRB1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const TASK_COLLECTION = collection(db, "task");
