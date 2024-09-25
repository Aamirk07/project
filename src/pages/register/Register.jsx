import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Create Account</span>
        <input type="text" placeholder="Enter your name..." />
        <input type="text" placeholder="Enter your number..." />
        <input type="text" placeholder="Enter your email..." />
        <input type="password" placeholder="Enter your password..." />
        <button className="registerBtn">Register</button>
        <div className="options">
          <Link to="/login">
            <span>
              already have an account? <b>login</b>
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
