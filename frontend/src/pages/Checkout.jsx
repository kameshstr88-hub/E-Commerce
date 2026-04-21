import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";
import { MapPin, Phone, User, Landmark } from "lucide-react";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;
      return sum + price * quantity;
    }, 0);
  }, [cartItems]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("checkoutInfo", JSON.stringify(form));
    localStorage.setItem("checkoutTotal", total);

    window.location.href = "/payment";
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <div className="checkout-left">
          <h1>Checkout</h1>
          <p className="subtitle">Enter your delivery details</p>

          <div className="input-box">
            <User size={18} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <Phone size={18} />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <MapPin size={18} />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <div className="input-box">
              <Landmark size={18} />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <MapPin size={18} />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>No products in cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={item._id || item.id || index} className="summary-item">
                <img
                  src={item.images?.[0] || item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>
                    ₹{item.price} × {item.quantity || 1}
                  </p>
                  <strong>
                    ₹{(Number(item.price) || 0) * (Number(item.quantity) || 1)}
                  </strong>
                </div>
              </div>
            ))
          )}

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={handleSubmit}
            disabled={total === 0}
          >
            Continue To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;