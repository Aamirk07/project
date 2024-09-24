import React from "react";
import "./navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

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
          <li className="link">Home</li>
          <li className="link">About</li>
          <li className="link">Write</li>
          <li className="link">Contact</li>
        </ul>
      </div>
      <div className="navRight">
        <div className="search">
          <FaSearch className="search-icon" />
          <input type="search" />
        </div>
        <MdOutlineLogout className="logout-icon" />
      </div>
    </div>
  );
};

export default Navbar;
