// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDPxUs19IMTiD3FkYaHu8bCPzOnWoUsw0",
  authDomain: "simple-sigin.firebaseapp.com",
  projectId: "simple-sigin",
  storageBucket: "simple-sigin.appspot.com",
  messagingSenderId: "901302324513",
  appId: "1:901302324513:web:b0eb0c706ec774d84b4260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}