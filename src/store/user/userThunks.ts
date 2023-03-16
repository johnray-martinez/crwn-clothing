import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserCredential } from 'firebase/auth';

import { 
  getCurrentUser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signOutUser,
  createUserDocumentWithEmailAndPassword
 } from '../../utils/firebase/firebase';

// THUNKS
export const checkSessionAsync = createAsyncThunk(
  'user/isAuthenticatedAsync',
  async () => await getCurrentUser()
)

export const signInWithEmailAsync = createAsyncThunk(
  'user/signInWithEmailAsync',
  async ({ email, password }: { 
      email: string, 
      password: string
    }) => await signInUserWithEmailAndPassword(email, password)
)

export const signInWithGoogleAsync = createAsyncThunk(
  'user/signInWithGoogleAsync',
  async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
    return user;
  }
)

export const signOutUserAsync = createAsyncThunk(
  'user/signOutUserAsync',
  async () => await signOutUser()
)

export const signUpUserAsync = createAsyncThunk(
  'user/signUpUserAsync',
  async ({ email, password, displayName }: {
      email: string, 
      password: string, 
      displayName: string
    }) => {
    const { user } = await createUserDocumentWithEmailAndPassword(email, password) as UserCredential;
    
    await createUserDocumentFromAuth({...user, displayName});

    return user;
  }
)

export const userThunks = [
  checkSessionAsync,
  signInWithEmailAsync,
  signInWithGoogleAsync,
  signOutUserAsync,
  signUpUserAsync
]