import { createContext } from "react";

export const cartState = {
  cart: [],
  addItem: (itemId, name, price, quantity) => {
    cartState.cart = [...cartState.cart, { id: itemId, name, price, quantity }]
  },
  removeItem: (itemId) => {
    const newCart = cartState.cart.filter((item) => item.id !== itemId);
    cartState.cart = newCart;
  },
  clear: () => cartState.cart = [],
  isInCart: (itemId) => cartState.cart.findIndex((item) => item.id === itemId)
}

export const CartContext = createContext();