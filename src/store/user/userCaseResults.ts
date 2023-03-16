import { UserCredential } from 'firebase/auth';
import { CurrentUser, UserState } from './UserTypes';
import { User } from 'firebase/auth';

const retrieveEmailAndAccessToken = ({ 
  accessToken, 
  email, 
  displayName 
}: CurrentUser) => ({ accessToken, email, displayName })


const rejected = (state: UserState, { error }: {
  error: {
    message?: string
  }
}) => {
  state.error = error.message;
  state.isLoading = false;
}

// accepts userAuth data
const success = (state: UserState, { payload }: {
  payload: unknown | UserCredential | User | void
}) => {
  const pickedUser = payload ? retrieveEmailAndAccessToken(payload as CurrentUser) : null
  
  state.currentUser = pickedUser
  state.isLoading = false;
}

const pending = (state: UserState) => {
  state.isLoading = true;
}

export const caseResult = { 
  rejected, 
  success, 
  pending
}