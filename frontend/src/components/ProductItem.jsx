import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
    </div>
  );
};

export default ProductItem;