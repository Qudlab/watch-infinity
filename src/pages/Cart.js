import React, { useContext } from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={`/assets/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₦{item.price.toLocaleString()}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₦{total.toLocaleString()}</h3>
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
