import { USER_ACTION_TYPES } from './userActionTypes';

export const setCurrentUser = (user) => {
  return { 
    type: USER_ACTION_TYPES.SET_CURRENT_USER, 
    payload: user
  };
}