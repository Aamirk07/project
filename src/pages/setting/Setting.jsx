import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegUserCircle } from "react-icons/fa";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitles">
          <div className="settingTitlesUpdate">Update Your Account</div>
          <div className="settingTitlesDelete">Delete Account</div>
        </div>
        <form className="settingForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid"
              alt=""
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle className="settingPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Alex" />
          <label>Email</label>
          <input type="email" placeholder="alex@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsubmmitBtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
