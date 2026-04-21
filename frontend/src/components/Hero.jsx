import React from "react";
import hero from "../assets/images/p1.webp";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="hero" />

      <div className="hero-text">
        <h1>New Collection</h1>
        <p>Discover the latest trends</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;