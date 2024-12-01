import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your purchase! Your order has been placed.");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange} />

        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" required onChange={handleChange}></textarea>

        <label htmlFor="paymentMethod">Payment Method</label>
        <select name="paymentMethod" id="paymentMethod" onChange={handleChange}>
          <option value="card">Credit/Debit Card</option>
          <option value="transfer">Bank Transfer</option>
          <option value="cash">Cash on Delivery</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
