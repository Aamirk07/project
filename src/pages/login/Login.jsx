import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <input type="text" placeholder="Enter your email..." />
        <input type="password" placeholder="Enter your password..." />
        <button className="loginBtn">Login</button>
        <div className="options">
          <Link to="/register">
            <span>
              don't have an account? <b>Register</b>
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
