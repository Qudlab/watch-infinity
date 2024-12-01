import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Luxury Gold Watch", price: 50000, image: "km1.jpg" },
  { id: 2, name: "Elegant Black Watch", price: 40000, image: "casio1.jpg" },
  // Add more products...
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
