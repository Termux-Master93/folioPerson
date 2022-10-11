
import {  FirebaseApp, initializeApp } from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore/lite';
const firebaseConfig={
  apiKey: "AIzaSyCOJrK-mum61D4T_7lwN7hHJxGXo5JGEoI",
  authDomain:"miapp-9d66e.firebaseapp.com",
  projectId: "miapp-9d66e",
  storageBucket: "miapp-9d66e.appspot.com",
  messagingSenderId: "352132702985",
  appId: "1:352132702985:web:16e179f572c7a3b3d569d8"
};

// Initialize Firebase
const app:FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore=getFirestore(app);