import { createContext, useContext } from "react";

export function useFormFieldErrorsContext() {
  return useContext(formFieldErrorsContext);
}

export const formFieldErrorsContext = createContext([]);
