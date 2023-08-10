import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Forminput from "./Forminput";
import { auth } from "./Firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 chracters and include atleast 1 letter, 1 number , 1 special chracter",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&^*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        updateProfile(user, {
          displayName: inputValues.email,
        });
        navigate("/confirm");
      });
    } catch (error) {}
  };
  // console.log(inputValues);
  return (
    <div>
      <div className="login-box">
        <p>SignUp</p>
        <form>
          {inputs.map((input) => (
            <div className="user-box">
              <Forminput
                className="user-box"
                key={input.id}
                {...input}
                value={inputValues[input.name]}
                onChange={handleChange}
              />
            </div>
          ))}
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
            <button type="submit" onClick={handleRegister}>
              Sign Up
            </button>
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="" className="a2">
            <Link to={"/login"}>Login</Link>
          </a>
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
        </p>
      </div>
    </div>
  );
};

export default SignUp;
