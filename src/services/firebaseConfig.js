// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhuGyGlhvHY8DAVXT8qPztJ7I55hK19AI",
  authDomain: "receitas-16221.firebaseapp.com",
  projectId: "receitas-16221",
  storageBucket: "receitas-16221.appspot.com",
  messagingSenderId: "556141334613",
  appId: "1:556141334613:web:f267db93576eecbb7844dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
