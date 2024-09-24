import React from "react";
import "./singlePost.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.pinimg.com/originals/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEditContainer">
            <FaRegEdit className="singlePostIcon" />
            <MdDelete className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthour">
            Author: <b>Alex</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDes">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          animi dolores odit eos saepe. Illum nobis deleniti possimus.
          Provident, ad fugiat. Odit, voluptates illo excepturi, accusantium aut
          cupiditate eos explicabo numquam maiores quia rerum aliquid
          repudiandae laborum voluptas omnis tempore. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. In rerum quidem natus odit eaque
          alias ea obcaecati autem accusantium a, ipsam voluptas, perferendis
          delectus nam? Quo debitis nemo, numquam ducimus voluptatem ea atque
          modi minus recusandae inventore quia quas temporibus libero delectus
          odio nihil ex iste exercitationem quasi? Facilis unde veritatis
          dolorem natus aut? Optio perspiciatis esse repellendus et adipisci.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
