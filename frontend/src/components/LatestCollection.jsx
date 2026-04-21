import React from "react";
import { products } from "../assets";

const LatestCollection = () => {
  return (
    <div>
      {products.map((item) => (
        <img key={item.id} src={item.image} alt="" />
      ))}
    </div>
  );
};

export default LatestCollection;