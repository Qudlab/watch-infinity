import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`/assets/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₦{product.price.toLocaleString()}</p>
      <Link to={`/products/${product.id}`} className="details-btn">View Details</Link>
    </div>
  );
};

export default ProductCard;
