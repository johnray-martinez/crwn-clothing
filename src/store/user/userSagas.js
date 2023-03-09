import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from '../../store/user/userActionTypes';
import { signInSuccess, signInFailed, signOutFailed, signOutSuccess } from './userAction';

import { 
  createUserDocumentFromAuth, 
  getCurrentUser,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  signOutUser
} from '../../utils/firebase/firebase';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);

    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (err) {
    yield put(signInFailed(err))
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password }}) {
  try {
    const { user } = yield call(signInUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailed(err))
  }
}

// listeners
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}
// sagas
export function* userSagas() {
  yield all(
    [
      call(onCheckUserSession), 
      call(onGoogleSignInStart),
      call(onEmailSignInStart), 
      call(onSignOutStart)
    ])
}