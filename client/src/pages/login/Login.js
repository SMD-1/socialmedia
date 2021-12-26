import { useRef } from "react";
import "./login.css";

const Login = () => {
  // here we can also use useState
  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(password.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MAKAUTiians</h3>
          <span className="logiDesc">Connect with you Seniors / Juniors </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              minLength="6"
              required
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="forgotPass">Forgot Password ?</span>
            <button className="createNewAcc">Create a new Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
