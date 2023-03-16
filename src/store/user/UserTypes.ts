import { UserCredential } from 'firebase/auth';

export type UserState = {
  currentUser: CurrentUser | null,
  isLoading: boolean,
  error?: string
}

export type CurrentUser = {
  email: string, 
  accessToken: string, 
  displayName: string
}
