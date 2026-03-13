import React from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

function ProductList({ products, loading }) {

  if (loading) {
    return <Loading />;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;