import React from "react";
import { Link } from "react-router-dom";

// 🔥 IMPORT IMAGES
import heroImg from "../assets/images/h11.jpg";
import bannerImg from "../assets/images/h2.webp";
import p1 from "../assets/images/h5.webp";
import p2 from "../assets/images/h8.webp";
import p3 from "../assets/images/h6.webp";
import p4 from "../assets/images/h7.webp";


const Home = () => {
  return (
    <div>
      {/* =========================
          🔥 HERO SECTION (PRO)
      ========================= */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <h1>Fashion That Defines You</h1>
          <p>New Drops • Premium Styles • Daily Wear</p>

          <div className="hero-buttons">
            <Link to="/collection" className="hero-btn">
              Shop Now
            </Link>


          </div>
        </div>
      </section>



      {/* 🔥 FEATURES */}
      <section className="policy">
        <div>
          <h4>🚚 Free Shipping</h4>
          <p>On all orders above ₹999</p>
        </div>

        <div>
          <h4>🔄 Easy Returns</h4>
          <p>7 days return policy</p>
        </div>

        <div>
          <h4>💳 Secure Payment</h4>
          <p>100% safe transactions</p>
        </div>
      </section>

      {/* 🔥 COLLECTION */}
      <section className="collection">
        <h2>Latest Collection</h2>

        <div className="products">
          {[
            { img: p1, name: "Gurka Pant", price: 499 },
            { img: p2, name: "Kurta Pant", price: 1299 },
            { img: p3, name: "Printed Shirt", price: 1999 },
            { img: p4, name: "Hoodie", price: 899 },
          ].map((item, i) => (
            <div className="product-card" key={i}>

              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              {/* 🔥 BUTTONS */}
              <div className="product-buttons">

                <button
                  className="cart-btn"
                  onClick={() => alert(`${item.name} added to cart 🛒`)}
                >
                  Add to Cart
                </button>

                <button
                  className="buy-btn"
                  onClick={() => alert(`Buying ${item.name} ⚡`)}
                >
                  Buy Now
                </button>

              </div>

            </div>
          ))}
        </div>
      </section>


      {/* 🔥 BANNER */}
      <section className="banner">

        <img src={bannerImg} alt="banner" />

        {/* 🔥 OVERLAY */}
        <div className="banner-overlay">

          <div className="banner-text">
            <h2>New Season Arrivals</h2>
            <p>Discover trending fashion styles at best prices</p>

            <Link
              to="/collection"
              state={{ defaultFilter: "summer" }}
              className="banner-btn"
            >
              Explore Collection
            </Link>
          </div>

        </div>

      </section>

      {/* 🔥 NEWSLETTER */}
      <section className="newsletter-pro">

        <div className="newsletter-card">

          {/* LEFT SIDE */}
          <div className="newsletter-info">
            <h2>Stay Ahead of Fashion </h2>
            <p>
              Join our VIP list and get early access to new drops, exclusive deals & style updates.
            </p>

            <div className="benefits">
              <span>⚡ Early Access</span>
              <span>💰 Exclusive Deals</span>
              <span>🚀 New Arrivals First</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="newsletter-form">

            <h3>Subscribe Now</h3>

            <div className="input-box">
              <span>📩</span>
              <input type="email" placeholder="Enter your email" />
            </div>

            <button>Join VIP List</button>

            <small>No spam. Only fashion updates ✨</small>

          </div>

        </div>

      </section>
    </div >
  );
};

export default Home;