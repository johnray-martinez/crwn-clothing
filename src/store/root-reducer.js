import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/userReducer';
import { categoryReducer } from './categories/categoryReducer';
import { cartReducer } from './cart/cartReducer';
 
export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer
});