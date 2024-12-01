import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Watch Infinity</h1>
      <p>Discover timeless elegance with our premium watches.</p>
      <Link to="/products" className="shop-btn">Shop Now</Link>
    </div>
  );
};

export default Home;
