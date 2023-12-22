import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB00sfRKfWcfYXLVzRn75yFyJc9SQq9n5k",
  authDomain: "iestpchupa2023-d3141.firebaseapp.com",
  projectId: "iestpchupa2023-d3141",
  storageBucket: "iestpchupa2023-d3141.appspot.com",
  messagingSenderId: "1048981537097",
  appId: "1:1048981537097:web:fb26c8e8d09cc7e85a1a98"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };