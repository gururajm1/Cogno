import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHCY9cwKlHcHLDgH4gXYmbmoi3F2qNZjs",
  authDomain: "cognoo-9abef.firebaseapp.com",
  projectId: "cognoo-9abef",
  storageBucket: "cognoo-9abef.firebasestorage.app",
  messagingSenderId: "670791345121",
  appId: "1:670791345121:web:9c19a87e0e7b00b9f568a0",
  measurementId: "G-RVMGR4BRVH"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth };