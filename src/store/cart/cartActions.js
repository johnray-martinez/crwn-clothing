import { CART_ACTION_TYPES } from './cartActionTypes';

export const addItemToCart = (itemToAdd) => {
  return {
    type: CART_ACTION_TYPES.UPDATE_CART, 
    payload: itemToAdd
  }
}

// export const removeItemToCart = (id, removeAll = false) =>{

//   if (!cart.has(id)) return;
//   const newMap = new Map(cart);

//   if (removeAll) {
//     newMap.delete(id);
//   } else {
//     const product = newMap.get(id);

//     product.quantity === 1 ? newMap.delete(id) : product.quantity--;
//   }

//   updateCartReducer(newMap);
// }

export const setShowDropdown = (value) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_DROPDOWN, 
    payload: value
  }
}