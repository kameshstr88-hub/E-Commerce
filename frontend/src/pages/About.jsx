import React from "react";

const About = () => {
  return (
    <div className="about-page">

      {/* 🔥 INTRO */}
      <div className="about-intro">
        <h1>About Us</h1>
        <p>We make fashion simple, affordable, and stylish.</p>
      </div>

      {/* GRID CARDS */}
      <div className="about-grid">

        <div className="about-card">
          <h3>Who We Are</h3>
          <p>
            Welcome to ShopZone! We provide the best fashion products at
            affordable prices with top quality.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver stylish and trendy outfits to everyone
            at budget-friendly prices.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            We aim to become one of the leading online fashion stores by
            providing the best customer experience.
          </p>
        </div>

      </div>

      {/* 🔥 WHY CHOOSE US */}
      <div className="about-extra">
        <h2>Why Choose Us</h2>

        <div className="extra-grid">
          <div className="extra-box">✔ High Quality Products</div>
          <div className="extra-box">✔ Fast Delivery</div>
          <div className="extra-box">✔ Easy Returns</div>
          <div className="extra-box">✔ Secure Payments</div>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </div>

      {/* 🔥 SERVICES STRIP */}
      <div className="about-services">
        <div>🚚 Free Delivery</div>
        <div>💳 Secure Payment</div>
        <div>🔄 Easy Return</div>
      </div>

    </div>
  );
};

export default About;