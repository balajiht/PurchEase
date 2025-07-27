import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./reducers/cartReducer";

// 1. Create the context
const cartContext = createContext();

// 2. Define the provider
const CartProvider = ({ children }) => {
  const initialState = {
    cart: Array.isArray(JSON.parse(localStorage.getItem("cart")))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  };

  const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState);

  // ✅ Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

// 3. Custom hook for easier usage
const useCart = () => useContext(cartContext);

// 4. Export
export { CartProvider, useCart };
