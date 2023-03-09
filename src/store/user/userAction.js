import { USER_ACTION_TYPES } from './userActionTypes';

export const checkUserSession = (user) => {
  return { 
    type: USER_ACTION_TYPES.CHECK_USER_SESSION, 
    payload: user
  };
}

export const emailSignInStart = (email, password) => {
  return { 
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: { email, password }
  }; 
}

export const googleSignInStart = () => {
  return { 
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
  };
}

export const signInSuccess = (user) => {
  return { 
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, 
    payload: user
  };
}

export const signInFailed = (err) => {
  return { 
    type: USER_ACTION_TYPES.SIGN_IN_FAILED, 
    payload: err
  };
}

export const signOutStart = () => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_START
  }
}

export const signOutSuccess = () => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
  }
}

export const signOutFailed = (err) => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: err
  }
}