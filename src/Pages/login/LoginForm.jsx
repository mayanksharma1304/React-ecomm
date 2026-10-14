import { useState } from "react";
import Input from "../../components/Custom/Input";
import "./LoginForm.css";

export default function LoginForm() {
  let handleSignInSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);
    var userData = Object.fromEntries(formData.entries());
    console.log(userData.email);
  };

  let [fieldErrors, setFieldErrors] = useState({ isEdited: false });

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <form onSubmit={handleSignInSubmit} id="loginForm">
          <h2 className="form-heading">SIGN IN</h2>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            label="Email Address"
            mandatory={true}
            error={fieldErrors}
            setError={setFieldErrors}
          />
          <Input
            type="password"
            name="password"
            id="loginPassword"
            label="Password"
            mandatory={true}
            error={fieldErrors}
            setError={setFieldErrors}
          />

          <div id="loginContainer__second-row">
            <Input
              type="checkbox"
              name="rememberme"
              id="rememberMe"
              label="Remember Me"
              error={fieldErrors}
            />

            <div className="forgot-password">
              <button type="button" className="button-link">
                Forgot Password
              </button>
            </div>
          </div>

          <button
            className="form-button"
            disabled={
              !fieldErrors.isEdited ||
              (fieldErrors.isEdited &&
                Object.keys(fieldErrors ?? {}).length > 1)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
