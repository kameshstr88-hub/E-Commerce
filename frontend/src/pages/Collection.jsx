import React, { useState } from "react";
import "./Collection.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

/* =========================
   🔥 CASUAL
========================= */
import c1f from "../assets/images/casual/c1f.webp";
import c1b from "../assets/images/casual/c1b.webp";
import c2f from "../assets/images/casual/c2f.webp";
import c2b from "../assets/images/casual/c2b.webp";
import c3f from "../assets/images/casual/c3f.webp";
import c3b from "../assets/images/casual/c3b.webp";
import c4f from "../assets/images/casual/c4f.webp";
import c4b from "../assets/images/casual/c4b.webp";

/* =========================
   🔥 SUMMER
========================= */
import s1f from "../assets/images/summer/s1f.webp";
import s1b from "../assets/images/summer/s1b.webp";
import s2f from "../assets/images/summer/s2f.webp";
import s2b from "../assets/images/summer/s2b.webp";
import s3f from "../assets/images/summer/s3f.webp";
import s3b from "../assets/images/summer/s3b.webp";
import s4f from "../assets/images/summer/s4f.webp";
import s4b from "../assets/images/summer/s4b.webp";
import s5f from "../assets/images/summer/s5f.webp";
import s5b from "../assets/images/summer/s5b.webp";
import s6f from "../assets/images/summer/s6f.webp";
import s6b from "../assets/images/summer/s6b.webp";
import s7f from "../assets/images/summer/s7f.webp";
import s7b from "../assets/images/summer/s7b.webp";

/* =========================
   🔥 GURKHA
========================= */
import g1f from "../assets/images/gurka/g1f.webp";
import g1b from "../assets/images/gurka/g1b.webp";
import g2f from "../assets/images/gurka/g2f.webp";
import g2b from "../assets/images/gurka/g2b.webp";

/* =========================
   🔥 T-SHIRT
========================= */
import t1f from "../assets/images/tshirt/t3f.webp";
import t1b from "../assets/images/tshirt/t3b.webp";
import t2f from "../assets/images/tshirt/t4f.webp";
import t2b from "../assets/images/tshirt/t4b.webp";

/* =========================
   🔥 MOM FIT
========================= */
import m1f from "../assets/images/momfit/m1f.webp";
import m1b from "../assets/images/momfit/m1b.webp";
import m2f from "../assets/images/momfit/m2f.webp";
import m2b from "../assets/images/momfit/m2b.webp";

/* =========================
   🔥 BAGGY
========================= */
import b1f from "../assets/images/baggy/b1f.webp";
import b1b from "../assets/images/baggy/b1b.webp";
import b2f from "../assets/images/baggy/b2f.webp";
import b2b from "../assets/images/baggy/b2b.webp";

/* =========================
   🔥 TRACK
========================= */
import tr1f from "../assets/images/track/t1f.webp";
import tr1b from "../assets/images/track/t1b.webp";
import tr2f from "../assets/images/track/t2f.webp";
import tr2b from "../assets/images/track/t2b.webp";

/* =========================
   🔥 BODYCON (NEW)
========================= */
import d1f from "../assets/images/bodycon/bg1f.webp";
import d1b from "../assets/images/bodycon/bg1b.webp";
import d2f from "../assets/images/bodycon/bg2f.webp";
import d2b from "../assets/images/bodycon/bg2b.webp";

const Collection = () => {
  const { addToCart } = useContext(CartContext);

  const [filters, setFilters] = useState({
    casual: false,
    summer: false,
    gurkha: false,
    tshirt: false,
    momfit: false,
    baggy: false,
    track: false,
    bodycon: false, // ✅ NEW
  });

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);


  /* =========================
     🔥 ALL PRODUCTS
  ========================= */
  const products = [
    /* CASUAL */
    { id: 1, name: "Casual Shirt", price: 499, category: "casual", images: [c1f, c1b] },
    { id: 2, name: "Casual Top", price: 599, category: "casual", images: [c2f, c2b] },
    { id: 3, name: "Street Casual", price: 699, category: "casual", images: [c3f, c3b] },
    { id: 4, name: "Classic Casual", price: 649, category: "casual", images: [c4f, c4b] },

    /* SUMMER */
    { id: 5, name: "Summer Tee", price: 399, category: "summer", images: [s1f, s1b] },
    { id: 6, name: "Beach Shirt", price: 549, category: "summer", images: [s2f, s2b] },
    { id: 7, name: "Cool Fit", price: 499, category: "summer", images: [s3f, s3b] },
    { id: 8, name: "Light Dress", price: 699, category: "summer", images: [s4f, s4b] },
    { id: 9, name: "Soft Cotton", price: 599, category: "summer", images: [s5f, s5b] },
    { id: 10, name: "Airy Wear", price: 649, category: "summer", images: [s6f, s6b] },
    { id: 11, name: "Summer Premium", price: 899, category: "summer", images: [s7f, s7b] },

    /* GURKHA */
    { id: 12, name: "Gurkha Classic", price: 999, category: "gurkha", images: [g1f, g1b] },
    { id: 13, name: "Gurkha Premium", price: 1099, category: "gurkha", images: [g2f, g2b] },

    /* T-SHIRT */
    { id: 14, name: "T-Shirt Basic", price: 499, category: "tshirt", images: [t1f, t1b] },
    { id: 15, name: "T-Shirt Style", price: 599, category: "tshirt", images: [t2f, t2b] },

    /* MOM FIT */
    { id: 16, name: "Mom Fit Light", price: 899, category: "momfit", images: [m1f, m1b] },
    { id: 17, name: "Mom Fit Trend", price: 949, category: "momfit", images: [m2f, m2b] },

    /* BAGGY */
    { id: 18, name: "Baggy Urban", price: 1099, category: "baggy", images: [b1f, b1b] },
    { id: 19, name: "Baggy Street", price: 1199, category: "baggy", images: [b2f, b2b] },

    /* TRACK */
    { id: 20, name: "Track Sport", price: 799, category: "track", images: [tr1f, tr1b] },
    { id: 21, name: "Track Active", price: 849, category: "track", images: [tr2f, tr2b] },

    /* BODYCON */
    { id: 22, name: "Bodycon Dress 1", price: 999, category: "bodycon", images: [d1f, d1b] },
    { id: 23, name: "Bodycon Dress 2", price: 1099, category: "bodycon", images: [d2f, d2b] },
  ];

  /* =========================
     🔥 FILTER + SEARCH
  ========================= */
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const activeFilters = Object.keys(filters).filter((key) => filters[key]);

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      activeFilters.length === 0 || filters[item.category];

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="collection-page">
      <h1>Our Collections</h1>

      {/* FILTERS */}
      <div className="filters">
        {Object.keys(filters).map((key) => (
          <label key={key}>
            <input type="checkbox" name={key} onChange={handleChange} /> {key}
          </label>
        ))}
      </div>

      {/* SEARCH */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.images[0]}
              alt={item.name}
              onClick={() => setSelectedProduct(item)}
            />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* NO RESULTS */}
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: "center" }}>No products found 😢</p>
      )}

      {/* POPUP */}
      {selectedProduct && (
        <div className="popup" onClick={() => setSelectedProduct(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedProduct(null)}>
              ×
            </span>

            <div className="popup-images">
              <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
              <img
                src={selectedProduct.images[1]}
                alt={`${selectedProduct.name} back`}
              />
            </div>

            <h2>{selectedProduct.name}</h2>
            <p>₹{selectedProduct.price}</p>

            <div className="product-buttons">
              <button
                className="cart-btn"
                onClick={() => {
                  addToCart(selectedProduct);
                  toast.success(`${selectedProduct.name} added to cart`);
                }}
              >
                Add to Cart
              </button>

              <button
                className="buy-btn"
                onClick={() => {
                  addToCart(selectedProduct);
                  window.location.href = "/checkout";
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;