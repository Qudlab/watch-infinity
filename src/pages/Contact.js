import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
