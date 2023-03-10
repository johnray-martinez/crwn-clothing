import { createSelector } from 'reselect';

export const selectCartReducer = (state) => state.cart;

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

