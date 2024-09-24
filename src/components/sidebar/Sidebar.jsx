import React from "react";
import "./sidebar.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarItemTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quas ipsam corporis pariatur in aperiam quos expedita eius odit deleniti.</p>

      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="listItem">Technology</li>
          <li className="listItem">Upcoming</li>
          <li className="listItem">Trending</li>
          <li className="listItem">Updates</li>
          <li className="listItem">Past</li>
          <li className="listItem">Feature</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaInstagram className="sidebarIcon" />
          <FaFacebookF className="sidebarIcon" />
          <FaXTwitter className="sidebarIcon" />
          <FaYoutube className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
