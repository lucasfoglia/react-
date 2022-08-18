import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM1QTxjHsff3j-JwflEU7glKG6J7tc4H8",
  authDomain: "proyecto-final-react-coder.firebaseapp.com",
  projectId: "proyecto-final-react-coder",
  storageBucket: "proyecto-final-react-coder.appspot.com",
  messagingSenderId: "117353684474",
  appId: "1:117353684474:web:9735b231451ada7acd9843",
  measurementId: "G-KXV3ESKKVZ"
};

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
