// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-+=\\[\]\/~`]).+$/;

  const validateMandatoryField = (field) => {
    if (field.required && !field.value) {
      return false;
    }
    return true;
  };

export const validateField = function (field) {
  
  if (!validateMandatoryField(field)) return {errorMsg: "This is a required Field"};

    switch (field.name) {
      case "email":
        if (!field.value.includes("@")) {
          return {
            error: true,
            errorMsg: "please enter a valid Email"
          }
        }
        return {
          error: false,
          errorMsg: null
        }
      case "password":
        if (field.value.length < 8) {
          return {
            error: true,
            errorMsg: "password must be atleast 8 charaters long"
          }
        } else if (!passwordRegex.test(field.value)) {
          return {
            error: true,
            errorMsg: "password doesn't match the required format"
          }
        }
        return {
          error: false,
          errorMsg: null
        }
      default:
        return {
          error: false,
          errorMsg: null
        }
    }
}