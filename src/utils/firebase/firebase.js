import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithPopup, 
  signInWithRedirect,
  GoogleAuthProvider, 
  getRedirectResult
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// user creation
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }
}