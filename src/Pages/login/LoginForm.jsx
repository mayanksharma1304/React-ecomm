import Input from "../../components/Custom/Input";
import "./LoginForm.css";
import Form from "../../components/Custom/Form";

export default function LoginForm() {
  let handleSignInSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);
    var userData = Object.fromEntries(formData.entries());
    console.log(userData.email);
  };

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <Form
          onSubmit={handleSignInSubmit}
          id="loginForm"
          formButtonLabel="Sign In"
          formHeading="SIGN IN"
        >
          <Input
            type="email"
            name="email"
            id="loginEmail"
            label="Email Address"
            mandatory={true}
          />
          <Input
            type="password"
            name="loginPassword"
            id="loginPassword"
            label="Password"
            mandatory={true}
          />

          <div id="loginContainer__second-row">
            <Input
              type="checkbox"
              name="rememberme"
              id="rememberMe"
              label="Remember Me"
            />

            <div className="forgot-password">
              <button type="button" className="button-link">
                Forgot Password
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
