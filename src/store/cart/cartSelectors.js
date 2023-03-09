import { createSelector } from 'reselect';

export const selectCartReducer = (state) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cart
)

export const selectShowDropdown = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.showDropdown
)

export const selectTotalItemsInCart = createSelector(
  [selectCart],
  (cart) => {
    const cartArray = [...cart.values()];
    const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);
    
    return totalItems;
  }
)

