import { FormFieldErrorsContextProvider } from "../../context/FormFieldErrorsContextProvider.jsx";
import FormContent from "./FormContent.jsx";

export default function Form(props) {
  return (
    <FormFieldErrorsContextProvider>
      <FormContent {...props} />
    </FormFieldErrorsContextProvider>
  );
}
