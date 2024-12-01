import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
