import { useCallback, useState } from "react";
import { formFieldErrorsContext } from "./FormFieldErrorsContext";

export function FormFieldErrorsContextProvider({ children }) {
  let [fieldErrors, setFieldErrors] = useState([]);

  let addFieldError = useCallback(
    (field, errorMsg, isEdited = false) =>
      setFieldErrors((prevErrors) => {
        // Remove the field if there is no error
        if (!errorMsg) {
          return prevErrors.filter((error) => error.name !== field.name);
        }

        const exists = prevErrors.some((error) => error.name === field.name);

        // Update the existing entry
        if (exists) {
          return prevErrors.map((error) =>
            error.name === field.name
              ? { name: field.name, errorMsg, isEdited }
              : error,
          );
        }

        // Add a new entry
        return [
          ...prevErrors,
          {
            name: field.name,
            errorMsg: errorMsg,
            isEdited: isEdited,
          },
        ];
      }),
    [],
  );

  return (
    <formFieldErrorsContext.Provider value={{ fieldErrors, addFieldError }}>
      {children}
    </formFieldErrorsContext.Provider>
  );
}
