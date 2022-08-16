import { useCallback, useState } from "react";
import { createContext } from "react";

export const useCartContext = () => {
  const [cart, setCart] = useState([]);

  const addItem = useCallback((itemId, name, price, quantity) => {
    setCart(prevCart => [...prevCart, { id: itemId, name, price, quantity }])
  }, [])

  const removeItem = useCallback((itemId => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart)
  }), [cart])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const isInCart = useCallback((itemId) => {
    return cart.findIndex((item) => item.id === itemId)
  }, [cart])


  return {
    cart,
    addItem,
    removeItem,
    clearCart,
    isInCart
  }
}

export const CartContext = createContext();