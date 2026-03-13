import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <img
        src={product.image_link}
        alt={product.name}
        width="150"
      />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;