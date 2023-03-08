import { CART_ACTION_TYPES } from './cartActionTypes';

// export const updateCartReducer = (itemsToAdd) => {
//   const cartArray = [...cart.values()];
//   const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);

//   dispatch({type: CART_ACTION_TYPES.UPDATE_CART, payload: { totalItemsInCart: totalItems, cart: itemsToAdd}})
// }

// export const addItemToCart = (itemToAdd) => {
//   const newMap = new Map(cart);
//   const {id, name, imageUrl, price} = itemToAdd;

//   if (newMap.has(id)) {
//     const product = newMap.get(id);
//     product.quantity++;
//   } else {
//     newMap.set(id, {
//       id, name, imageUrl, price, quantity: 1
//     })
//   }

//   updateCartReducer(newMap);
// }

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
  console.log(value)
  return {
    type: CART_ACTION_TYPES.TOGGLE_DROPDOWN, 
    payload: value
  }
}