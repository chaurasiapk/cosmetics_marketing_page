// Import React and styles
import React from "react";
import "./Footer.scss";

// Footer component: renders the footer with four columns of content and icons
export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        {/* Column 1: List of features */}
        <div className="footer__column-1">
          <h5>Heading-1</h5>
          <ul>
            <li>Use these free 3d,bottle,stereoscopic </li>
            <li>stereoscopic PNG transparent background.</li>
            <li>All images commercial use available</li>
            <li>premium member, copyright guarantee.</li>
            <li>All images commercial use available</li>
          </ul>
        </div>

        {/* Column 2: List of features */}
        <div className="footer__column-2">
          <h5>Heading-2</h5>
          <ul>
            <li>Use these free 3d,bottle,stereoscopic </li>
            <li>stereoscopic PNG transparent background.</li>
            <li>All images commercial use available</li>
            <li>premium member, copyright guarantee.</li>
          </ul>
        </div>

        {/* Column 3: List of features */}
        <div className="footer__column-3">
          <h5>Heading-3</h5>
          <ul>
            <li>Use these free 3d,bottle,stereoscopic </li>
            <li>stereoscopic PNG transparent background.</li>
            <li>All images commercial use available</li>
          </ul>
        </div>

        {/* Column 4: App icons */}
        <div className="footer__column-4">
          <h5>Heading-4</h5>

          <i className="ri-google-play-fill"></i>
          <i className="ri-apple-fill"></i>
        </div>
      </div>
    </div>
  );
};
