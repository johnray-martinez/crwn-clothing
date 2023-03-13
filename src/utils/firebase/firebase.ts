import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  writeBatch
} from 'firebase/firestore';
import { Category } from '../../store/categories/categoryTypes';
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
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// required firestore variables
export const auth = getAuth();
export const db = getFirestore();

// COLLECTIONS
const categoriesCollection = collection(db, 'categories');

// TYPE
export type ObjectToAdd = {
  title: string
}
// db population
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string, 
  objectsToAdd: T[]): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const q = query(categoriesCollection);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((snapshot) => snapshot.data() as Category);
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'users');
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email, } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('error creating the user', error.message);
      }
    }
  }
}

export const createUserDocumentWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth);

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = onAuthStateChanged(
    auth, 
    (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    },
    reject
  )
})
