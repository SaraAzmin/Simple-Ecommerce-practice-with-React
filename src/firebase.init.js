// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdTpDXgBKMXkRUsLnhz9CJ-ejGL6SZpdI",
    authDomain: "simple-ecommerce-dd2c6.firebaseapp.com",
    projectId: "simple-ecommerce-dd2c6",
    storageBucket: "simple-ecommerce-dd2c6.appspot.com",
    messagingSenderId: "179326350644",
    appId: "1:179326350644:web:f662ffd3804d2a883c2161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;