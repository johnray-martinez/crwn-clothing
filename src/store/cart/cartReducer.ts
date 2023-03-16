import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './cartTypes';

const INITIAL_STATE: CartState = {
  cart: [], 
  showDropdown: false
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState: INITIAL_STATE,
  reducers: {
    setShowDropdown(state, { payload }) {
      state.showDropdown = payload
    },
    addItemToCart(state, { payload }) {
      const cartCopy = [...state.cart];
      const { id } = payload;
      const existingProduct = cartCopy.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cartCopy.push({ ...payload, quantity: 1 }) 
      }
      
      state.cart = cartCopy;
    },
    removeItemFromCart(state, { payload }) {
      const { id, removeAll } = payload;
      const cart = state.cart;
      
      const existingProductIndex = cart.findIndex((product) => product.id === id);

      if (existingProductIndex < 0) return; // nothing to delete

      const cartCopy = [...cart];

      if (removeAll) {
        cartCopy.splice(existingProductIndex, 1);
      } else {
        const product = cartCopy[existingProductIndex];
        
        product.quantity === 1 
        ? cartCopy.splice(existingProductIndex, 1) 
        : product.quantity--;
      }

      state.cart = cartCopy;
    }
  }
})

export const { 
  setShowDropdown, 
  addItemToCart,
  removeItemFromCart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;