import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tech & Web</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className="headerImg" src="https://images.ctfassets.net/l3l0sjr15nav/1AcxfvZc9fDHdXJO7QuZQy/e8a614659231b5433d9454f0c7228d0d/parent-teacher-communication-blog-header-image-smallpdf.png" alt="" />
    </div>
  );
};

export default Header;
