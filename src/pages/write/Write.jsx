import React from "react";
import "./write.css";
import { IoMdAdd } from "react-icons/io";

const Write = () => {
  return (
    <div className="write">
        <img src="https://i.pinimg.com/originals/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <IoMdAdd  className="writeIcon"/>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeBtn">Publish</button>
      </form>
    </div>
  );
};

export default Write;
