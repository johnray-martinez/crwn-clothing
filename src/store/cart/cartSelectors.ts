import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCartReducer = (state: RootState) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cartReducer) => Array.from(Object.values(cartReducer.cart))
)

export const selectShowDropdown = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.showDropdown
)

export const selectTotalItemsInCart = createSelector(
  [selectCart],
  (cart) => {

    let totalItems = 0;
    const cartArray = cart;
    
    totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);
    
    return totalItems;
  }
)

export const selectTotalAmountOfItemsInCart = createSelector(
  [selectCart],
  (cart) => {
    let totalPrice = 0;
    const cartArray = cart;
    
    totalPrice = cartArray.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
    
    return totalPrice;
  }
)

