// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW773EYpJyaFHPmga-ozW9IuxbijKjz-4",
  authDomain: "todo-listnew-110e7.firebaseapp.com",
  projectId: "todo-listnew-110e7",
  storageBucket: "todo-listnew-110e7.appspot.com",
  messagingSenderId: "1069436266204",
  appId: "1:1069436266204:web:0d702d8f6cb019d8c1b619"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig)

// // Get a reference to the database service
// // export const database = getDatabase(app);
// export default firebase; 

firebase.initializeApp(firebaseConfig)

export default firebase;
