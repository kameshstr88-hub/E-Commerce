import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: "120px", borderRadius: "10px" }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => (window.location.href = "/checkout")}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;