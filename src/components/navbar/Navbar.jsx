import React from "react";
import "./navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <FaInstagram className="icon" />
        <FaFacebookF className="icon" />
        <FaXTwitter className="icon" />
        <FaYoutube className="icon" />
      </div>
      <div className="navMid">
        <ul className="links">
          <Link className="link" to="/">
            <li className="link">Home</li>
          </Link>
          <Link className="link" to="/about">
            <li className="link">About</li>
          </Link>
          <Link className="link" to="/write">
            <li className="link">Write</li>
          </Link>
          <Link className="link">
            <li className="link">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="navRight">
        <div className="search">
          <FaSearch className="search-icon" />
          <input type="search" />
        </div>
        <Link className="link" to="/login">
          <MdOutlineLogout className="logout-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
