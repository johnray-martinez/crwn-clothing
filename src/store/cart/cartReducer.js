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
      const { cart, totalItemsInCart } = payload;
      return {
        ...state,
        cart,
        totalItemsInCart
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