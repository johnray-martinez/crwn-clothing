import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoryReducer } from './categories/categoryReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer
});