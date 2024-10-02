import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="link" to="/">
          <span className="logo">Srx-Booking</span>
        </Link>
        <div className="nav-item">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
