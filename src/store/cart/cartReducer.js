import { CART_ACTION_TYPES } from './cartActionTypes';

const INITIAL_STATE = {
  cart: new Map(), 
  showDropdown: false, 
  totalItemsInCart: 0
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART: {
      const newMap = new Map(state.cart);
      const { id } = payload;

      if (newMap.has(id)) {
        const product = newMap.get(id);
        product.quantity++;
      } else {
        newMap.set(id, { ...payload, quantity: 1 })
      }

      const cartArray = [...newMap?.values()];
      const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);

      return {
        ...state,
        cart: newMap, 
        totalItemsInCart: totalItems
      }
    }

    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return {
        ...state,
        showDropdown: payload
      }
    default: return state;
  }
}