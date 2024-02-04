// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDntLSG2eJfwO49o378IsZi2c4H-mnQVXA",
  authDomain: "auth-demo-d899f.firebaseapp.com",
  projectId: "auth-demo-d899f",
  storageBucket: "auth-demo-d899f.appspot.com",
  messagingSenderId: "906986918063",
  appId: "1:906986918063:web:aab0841e0ff6ac3a01445a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };