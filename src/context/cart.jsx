import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cart: new Map(),
  addItemToCart: () => null,
  removeItemToCart: () => null,
  showDropdown: false,
  setShowDropdown: () => null, 
  totalItemsInCart: 0,
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(new Map());
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  
  // HOOKS
  useEffect(() => {
    const cartArray = [...cart.values()];
    const totalItems = cartArray.reduce((total, currentItem) => total + currentItem.quantity, 0);
    
    setTotalItemsInCart(totalItems);
  }, [cart]);

  // HELPERS
  const addItemToCart = ({id, name, imageUrl, price}) => {
    const newMap = new Map(cart);

    if (newMap.has(id)) {
      const product = newMap.get(id);

      product.quantity++;
    } else {
      newMap.set(id, {
        id, name, imageUrl, price, quantity: 1
      })
    }

    setCart(newMap);
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

    setCart(newMap);
  }

  const value = {
    cart, setCart, 
    showDropdown, setShowDropdown,
    addItemToCart, removeItemToCart,
    totalItemsInCart
   }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}