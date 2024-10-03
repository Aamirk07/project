import React from "react";
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://3.imimg.com/data3/MV/LC/MY-16651229/images-caterrers-20images-cocktail.jpg"
          alt=""
          className="featured-item-img"
        />
        <div className="featured-item-titles">
          <h1>OG Caterer</h1>
          <h2>520</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/11/LF/ZK/SW/10014768/lpg-caterres-250x250.jpg"
          alt=""
          className="featured-item-img"
        />
        <div className="featured-item-titles">
          <h1>Royal Caterer</h1>
          <h2>422</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://image.wedmegood.com/resized/800X/uploads/member/26467/1600097916_SAVE_20200709_102940_01.jpeg?crop=0,99,960,540"
          alt=""
          className="featured-item-img"
        />
        <div className="featured-item-titles">
          <h1>Indian Caterer</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
