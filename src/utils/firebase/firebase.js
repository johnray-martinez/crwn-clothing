// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithPopup, 
  SignInWithRedirect,
  GoogleAuthProvider, 
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOkkjZ9ff6zxTQwa4VaaPkRZ7Z2s2IrnU",
  authDomain: "crwn-clothing-web-app-425a8.firebaseapp.com",
  projectId: "crwn-clothing-web-app-425a8",
  storageBucket: "crwn-clothing-web-app-425a8.appspot.com",
  messagingSenderId: "509292644827",
  appId: "1:509292644827:web:08d6877f6ec46f165d3ffe",
  measurementId: "G-7NHKFPK8LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);