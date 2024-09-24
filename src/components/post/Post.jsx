import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://mrwallpaper.com/images/thumbnail/explore-the-possibilities-of-4k-tech-twtykjtj0sv4hi62.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Technology</span>
          <span className="postCat">Upcoming</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt
        incidunt doloremque? Pariatur neque quod, aliquam dignissimos voluptatum
        nam hic tempora exercitationem eligendi vitae error explicabo, officiis
        quam aliquid repellat blanditiis laborum fugiat veniam Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Eveniet sunt incidunt doloremque?
        Pariatur neque quod, aliquam dignissimos voluptatum nam hic tempora
        exercitationem eligendi vitae error explicabo, officiis quam aliquid
        repellat blanditiis laborum fugiat veniamLorem ipsum dolor sit amet
        consectetur adipisicing elit. Eveniet sunt incidunt doloremque? Pariatur
        neque quod, aliquam dignissimos voluptatum nam hic tempora
        exercitationem eligendi vitae error explicabo, officiis quam aliquid
        repellat blanditiis laborum fugiat veniam
      </p>
    </div>
  );
};

export default Post;
