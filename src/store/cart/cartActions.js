import { CART_ACTION_TYPES } from './cartActionTypes';

const updateCart = (itemToAdd) => {
  const cartArray = [...itemToAdd.values()];
  const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);
  
  return {
    type: CART_ACTION_TYPES.UPDATE_CART, 
    payload: { cart: itemToAdd, totalItemsInCart: totalItems }
  }
}

export const addItemToCart = (productsInCart, itemToAdd) => {
  const newMap = new Map(productsInCart);
  const { id } = itemToAdd;

  if (newMap.has(id)) {
    const product = newMap.get(id);
    product.quantity++;
  } else {
    newMap.set(id, { ...itemToAdd, quantity: 1 })
  }
  
  return updateCart(newMap);
}

export const removeItemFromCart = (cart, id, removeAll = false) =>{
  if (!cart.has(id)) return;
  const newMap = new Map(cart);

  if (removeAll) {
    newMap.delete(id);
  } else {
    const product = newMap.get(id);

    product.quantity === 1 ? newMap.delete(id) : product.quantity--;
  }

  return updateCart(newMap);
}

export const setShowDropdown = (value) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_DROPDOWN, 
    payload: value
  }
}