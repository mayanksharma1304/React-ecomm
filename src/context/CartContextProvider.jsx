import { useState } from "react";
import { cartContext } from "./CartContext";

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(0);

  const addToCart = () => setCart((prevCart) => prevCart + 1);

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
