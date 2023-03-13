export type UserState = {
  currentUser: User,
  isLoading: boolean,
  error: string
}

export type User = {
  email: string, 
  token: string, 
  displayName: string
}