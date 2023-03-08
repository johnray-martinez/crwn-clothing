import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  cart: new Map(),
  addItemToCart: () => null,
  removeItemToCart: () => null,
  setShowDropdown: () => null, 
  showDropdown: false,
  totalItemsInCart: 0,
});


const INITIAL_STATE = {
  cart: new Map(), 
  showDropdown: false, 
  totalItemsInCart: 0
}

const CART_ACTION_TYPES = {
  UPDATE_CART: 'UPDATE_CART',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN'
}

const cartReducer = (state, action) => {
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
    default: 
      throw new Error(`Unhandled type ${type} in CartReducer`);
  }
}

export const CartProvider = ({children}) => {
  const [{
    cart, 
    totalItemsInCart, 
    showDropdown
  }, dispatch] = useReducer(cartReducer, INITIAL_STATE);


  // HELPERS
  const updateCartReducer = (itemsToAdd) => {
    const cartArray = [...cart.values()];
    const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);

    dispatch({type: CART_ACTION_TYPES.UPDATE_CART, payload: { totalItemsInCart: totalItems, cart: itemsToAdd}})
  }

  const addItemToCart = (itemToAdd) => {
    const newMap = new Map(cart);
    const {id, name, imageUrl, price} = itemToAdd;

    if (newMap.has(id)) {
      const product = newMap.get(id);
      product.quantity++;
    } else {
      newMap.set(id, {
        id, name, imageUrl, price, quantity: 1
      })
    }
  
    updateCartReducer(newMap);
  }

  const removeItemToCart = (id, removeAll = false) =>{

    if (!cart.has(id)) return;
    const newMap = new Map(cart);

    if (removeAll) {
      newMap.delete(id);
    } else {
      const product = newMap.get(id);

      product.quantity === 1 ? newMap.delete(id) : product.quantity--;
    }

    updateCartReducer(newMap);
  }

  const setShowDropdown = (value) => {
    dispatch({type: CART_ACTION_TYPES.TOGGLE_DROPDOWN, payload: value})
  }


  const value = {
    cart, addItemToCart, removeItemToCart,
    showDropdown, setShowDropdown,
    totalItemsInCart,
   }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}