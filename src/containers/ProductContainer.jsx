import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

// Closure for request history
function createRequestTracker() {
  let history = [];

  return function(url) {
    history.push(url);
    console.log("Request History:", history);
  };
}

const trackRequest = createRequestTracker();

function ProductContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    trackRequest(API_URL);   // tracking API calls

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setProducts(data.slice(0, 20)); // limit products
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Makeup Products</h1>
      <ProductList products={products} loading={loading} />
    </div>
  );
}

export default ProductContainer;