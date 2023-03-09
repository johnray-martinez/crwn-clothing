import { CART_ACTION_TYPES } from './cartActionTypes';

const INITIAL_STATE = {
  cart: [], 
  showDropdown: false
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART: {
      return {
        ...state,
        cart: payload
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