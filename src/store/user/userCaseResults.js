const retrieveEmailAndAccessToken = (({ accessToken, email, displayName }) => ({ accessToken, email, displayName }))

const rejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
}

// accepts userAuth data
const success = (state, { payload }) => {
  const pickedUser = payload && retrieveEmailAndAccessToken(payload)
 
  state.currentUser = pickedUser
  state.isLoading = false;
}

const pending = (state, _) => {
  state.isLoading = true;
}

export const caseResult = { 
  rejected, 
  success, 
  pending
}