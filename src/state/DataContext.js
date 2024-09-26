import { createContext } from "react";

// Create a context for the user
const DataContext = createContext({
  cart: [],
  user: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

export default DataContext;
