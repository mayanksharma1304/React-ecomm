import { createContext, useContext } from "react";

export function useCartContext() {
  return useContext(cartContext);
}
export const cartContext = createContext(0);
