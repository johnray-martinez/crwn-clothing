import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase';

// value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: payload
      };

      default:
        throw new Error(`Unhandled type ${type} in UserReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  }
  
  const value = { currentUser: state.currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    })

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}