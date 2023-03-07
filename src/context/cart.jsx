import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: new Map(),
  setCart: () => null,
  showDropdown: false,
  setShowDropdown: () => null, 
  totalItemsInCart: 0,
  setTotalItemsInCart: () => null
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(new Map());
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const value = {
    cart, setCart, 
    showDropdown, setShowDropdown,
    totalItemsInCart, setTotalItemsInCart
   }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}