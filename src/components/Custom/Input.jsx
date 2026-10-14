import { validateField } from "../../utils/Utils.js";

export default function Input({
  type,
  name,
  id,
  placeholder,
  label,
  mandatory,
  error,
  setError,
}) {
  let containerClass =
    type == "checkbox" ? "checkbox-container" : "input-container";

  const handleInputOnBlur = (event) => {
    if (!error.isEdited) {
      setError((prevError) => ({
        ...prevError,
        isEdited: true,
      }));
    }
    let field = event.target;
    let { errorMsg } = validateField(field);

    setError((prevError) => {
      if (!errorMsg) {
        const { [field.name]: _, ...rest } = prevError;
        return rest;
      }

      return {
        ...prevError,
        [field.name]: errorMsg,
      };
    });
  };

  return (
    <div className={containerClass}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder ? placeholder : " "}
        required={mandatory ? true : false}
        onBlur={handleInputOnBlur}
      />
      <label htmlFor={id}>{label}</label>
      <span id={`${id}-error`}>{error && error[name] ? error[name] : ""}</span>
    </div>
  );
}
