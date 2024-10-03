import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      itemscope
      itemtype="http://schema.org/WPFooter"
    >
      <div
        className="social"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <h3 style={{marginBottom:"20px"}} id="social-heading" className="sr-only">
          Follow us on social media
        </h3>
        <Link
          style={{ marginLeft: "25px",fontSize:"20px" }}
          className="link"
          to="/"
          aria-label="Facebook"
        >
          <FaFacebook />
        </Link>
        <Link
          className="link"
          style={{ marginLeft: "25px",fontSize:"20px" }}
          to="/"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </Link>
        <Link
          className="link"
          style={{ marginLeft: "25px",fontSize:"20px" }}
          to="/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          className="link"
          style={{ marginLeft: "25px",fontSize:"20px" }}
          to="/"
          aria-label="Instagram"
        >
          <MdWhatsapp />
        </Link>
      </div>
      <p className="copyright">
        © 2024 srxbooking. Some Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
