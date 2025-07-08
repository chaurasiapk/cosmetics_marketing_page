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
          <h5>Get Social Link</h5>

          <div style={{ display: "flex", gap: "12px", marginBottom: "12px" , justifyContent: "center" }}>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/chaurasiapk",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              title="GitHub"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i
                className="ri-github-fill"
                style={{ fontSize: 24, color: "#fefce3" }}
              ></i>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/pradeepchaurasia93",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              title="LinkedIn"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i
                className="ri-linkedin-box-fill"
                style={{ fontSize: 24, color: "#fefce3" }}
              ></i>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://chaurasiapk.github.io/profile",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              title="Portfolio"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i
                className="ri-user-3-fill"
                style={{ fontSize: 24, color: "#fefce3" }}
              ></i>
            </button>
            <button
              onClick={() =>
                window.open("https://app.enhancv.com/share/84d2a9c0/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic", "_blank", "noopener,noreferrer")
              }
              title="Resume"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i
                className="ri-file-list-3-fill"
                style={{ fontSize: 24, color: "#fefce3" }}
              ></i>
            </button>
            <button
              onClick={() =>
                (window.location.href = "mailto:chaurasia.pk6@@gmail.com")
              }
              title="Email"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i
                className="ri-mail-fill"
                style={{ fontSize: 24, color: "#fefce3" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "24px",
          fontSize: "14px",
          color: "#fefce3",
        }}
      >
        © 2025 . All rights reserved. Made with ❤️ of pradeep
      </div>
    </div>
  );
};
