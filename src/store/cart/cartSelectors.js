export const selectCart = (state) => state.cart.cart;

export const selectShowDropdown = (state) => state.cart.showDropdown;

export const selectTotalItemsInCart = (state) => {
  const cartArray = [...state.cart.cart.values()];
  const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);
  
  return totalItems;
}
