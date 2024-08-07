// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PJ9-abnOM5hrIhtB1oV7NLkxGQGCKuc",
  authDomain: "inventory-managment-ca49c.firebaseapp.com",
  projectId: "inventory-managment-ca49c",
  storageBucket: "inventory-managment-ca49c.appspot.com",
  messagingSenderId: "995888462751",
  appId: "1:995888462751:web:edaf7242e6e4df9a079baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };