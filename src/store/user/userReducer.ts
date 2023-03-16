import { createSlice } from '@reduxjs/toolkit';

import { caseResult } from './userCaseResults';
import { UserState } from './UserTypes';
import { userThunks } from './userThunks'

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    const {
      success, 
      pending,
      rejected
    } = caseResult;

    userThunks.forEach((thunk) => {
      builder.addCase(thunk.fulfilled, success);
      builder.addCase(thunk.pending, pending);
      builder.addCase(thunk.rejected, rejected);
    })
  }
})

export const userReducer = userSlice.reducer;