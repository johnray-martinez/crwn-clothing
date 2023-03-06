import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  showDropdown: false
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const value = {cart, setCart, showDropdown, setShowDropdown}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}