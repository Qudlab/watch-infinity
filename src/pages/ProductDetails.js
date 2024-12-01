import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Luxury Gold Watch", price: 50000, image: "watch1.jpg", description: "A premium watch with gold accents." },
  // Add more products...
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <img src={`/assets/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₦{product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductDetails;
