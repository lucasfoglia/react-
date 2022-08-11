export const CartContext = React.createContext({
    cart: [],
    addItem: () => {},
  removeItem: (itemId),
  clear: () => {},
  isInCart: () => {}
  });