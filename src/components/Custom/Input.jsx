import { useFormFieldErrorsContext } from "../../context/FormFieldErrorsContext";

export default function Input({
  type,
  name,
  id,
  placeholder,
  label,
  mandatory,
}) {
  let containerClass =
    type == "checkbox" ? "checkbox-container" : "input-container";

  let { fieldErrors } = useFormFieldErrorsContext();

  const fieldError = fieldErrors.find((error) => error.name === name);

  const errorMsg = fieldError?.isEdited ? fieldError.errorMsg : "";

  return (
    <div className={containerClass}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder ? placeholder : " "}
        required={mandatory ? true : false}
      />
      <label htmlFor={id}>{label}</label>
      <span id={`${id}-error`}>{errorMsg && errorMsg}</span>
    </div>
  );
}
