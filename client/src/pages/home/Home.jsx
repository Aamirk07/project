import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <h1 className="home-title">Browse by Area</h1>
    </div>
  );
};

export default Home;
