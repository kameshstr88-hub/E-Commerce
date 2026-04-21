import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <h2 className="logo">ShopZone</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-icons">
        <span onClick={() => navigate("/collection")}>🔍</span>
        <span onClick={() => navigate("/cart")}>🛒</span>

        {/* ☰ MENU */}
        <span onClick={() => setMenuOpen(true)}>☰</span>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        {/* ❌ CLOSE BUTTON */}
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </span>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/collection" onClick={() => setMenuOpen(false)}>Collection</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

    </div>
  );
};

export default Navbar;