import { initializeApp } from "firebase/app";

import { getFirestore, doc, deleteDoc } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBePgl7yj_y6mtuMHecqp8GQ8R9-05QD8s",

  authDomain: "NreyesG-4f8a4.firebaseapp.com",
  projectId: "NreyesG-4f8a4",
  storageBucket: "NreyesG-4f8a4.firebasestorage.app",
  messagingSenderId: "263699599179",
  appId: "1:263699599179:web:ef68d24bf73bfdaf398813",
  measurementId: "G-TM4EFCM1ZG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, deleteDoc, doc };






