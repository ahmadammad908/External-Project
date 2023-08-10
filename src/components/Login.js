import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          // ...
          navigate("/");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(inputs);
  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input
              type={"email"}
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-box">
            <input
              type={"password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="user-box">
            <input required="" name="" type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Password</label>
          </div> */}
          <a href="#" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="" className="a2">
            <Link to={"/signup"}>signup</Link>
          </a>
        </p>
        <Link to={"#"}>
          <h1 style={{ background: "blue", padding: "20px" }}>
            Login With Facebook
          </h1>
        </Link>
        <Link to={"#"}>
          <h1 style={{ background: "red", padding: "20px" }}>
            Login With Goggle
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;
