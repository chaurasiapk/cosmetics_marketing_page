// Import React and styles
import React from "react";
import "./Footer.scss";

// Footer component: renders the footer with four columns of content and icons
export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        {/* Column 1: About Us */}
        <div className="footer__column-1">
          <h5>About Us</h5>
          <ul>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 2: Customer Care */}
        <div className="footer__column-2">
          <h5>Customer Care</h5>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Our Products */}
        <div className="footer__column-3">
          <h5>Our Products</h5>
          <ul>
            <li>Serums</li>
            <li>Moisturizers</li>
            <li>Cleansers</li>
          </ul>
        </div>

        {/* Column 4: Get Our App */}
        <div className="footer__column-4">
          <h5>Get Our App</h5>

          <i className="ri-google-play-fill"></i>
          <i className="ri-apple-fill"></i>
        </div>
      </div>
    </div>
  );
};
