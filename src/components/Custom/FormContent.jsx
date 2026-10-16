import { useEffect, useRef } from "react";
import { validateField } from "../../utils/Utils.js";
import { useFormFieldErrorsContext } from "../../context/FormFieldErrorsContext.jsx";

export default function FormContent({
  children,
  onSubmit,
  id,
  formButtonLabel,
  formHeading,
}) {
  let formRef = useRef(null);
  let { fieldErrors, addFieldError } = useFormFieldErrorsContext();

  useEffect(() => {
    let form = formRef.current;

    if (!form) return;

    Array.from(form.elements).forEach((field) => {
      let { errorMsg } = validateField(field);
      addFieldError(field, errorMsg, false);
    });
  }, [addFieldError]);

  const handleInputOnBlur = (event) => {
    let field = event.target;
    let { errorMsg } = validateField(field);
    addFieldError(field, errorMsg, true);
  };

  return (
    <form
      onSubmit={onSubmit}
      id={id}
      noValidate={true}
      ref={formRef}
      onBlur={handleInputOnBlur}
    >
      <h2 className="form-heading">{formHeading}</h2>
      {children}
      <button className="form-button" disabled={fieldErrors?.length > 0}>
        {formButtonLabel}
      </button>
    </form>
  );
}
