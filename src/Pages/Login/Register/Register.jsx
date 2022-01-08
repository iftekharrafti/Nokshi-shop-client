import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import "./register.css";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {registerUser} = useAuth();

  const handleRegisterSubmit = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    registerUser(email, password)
    console.log(email, password);
    e.preventDefault();
  }

  return (
    <div>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form onSubmit={handleRegisterSubmit} className="registerForm">
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            ref={emailRef}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="registerButton">Register</button>
        </form>
        <Link to="/login">
          <button className="registerLoginButton">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
