import { CART_ACTION_TYPES } from './cartActionTypes';

const updateCart = (itemToAdd) => {
  return {
    type: CART_ACTION_TYPES.UPDATE_CART, 
    payload: itemToAdd
  }
}

export const addItemToCart = (productsInCart, itemToAdd) => {
  const cartCopy = [...productsInCart];
  const { id } = itemToAdd;
  const existingProduct = cartCopy.find(product => product.id === id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cartCopy.push({ ...itemToAdd, quantity: 1 }) 
  }
  
  return updateCart(cartCopy);
}

export const removeItemFromCart = (cart, id, removeAll = false) => {
  const existingProductIndex = cart.findIndex((product) => product.id === id);
  const deleteItem = (idx) => cartCopy.splice(idx, 1);
  if (existingProductIndex < 0) return; // nothing to delete

  const cartCopy = [...cart];

  if (removeAll) {
    deleteItem(existingProductIndex)
  } else {
    const product = cartCopy[existingProductIndex];

    product.quantity === 1 ? deleteItem(existingProductIndex) : product.quantity--;
  }

  return updateCart(cartCopy);
}

export const setShowDropdown = (value) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_DROPDOWN, 
    payload: value
  }
}