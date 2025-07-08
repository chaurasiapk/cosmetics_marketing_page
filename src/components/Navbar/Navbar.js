// Import React and styles
import React, { useState } from "react";
import "./Navbar.scss";

// NavBar component: renders the navigation bar with menu and responsive toggle
export const NavBar = () => {
  // State to handle menu toggle for mobile view
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar">
        {/* Left section: Brand button */}
        <div className="navbar__left">
          <button>
            <h3>Karma</h3>
          </button>
        </div>

        {/* Right section: Menu and hamburger icon */}
        <div className="navbar__right">
          <div className="navbar__menu-bar">
            <input type="checkbox" id="checkBox" />
            <ul>
              <li>
                <button className="btn">Shop</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Discover</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
            </ul>

            {/* Hamburger/close icon for mobile menu */}
            <div
              className="navbar__three-bars"
              onClick={() => {
                setClicked(clicked ? false : true);
              }}
            >
              <label htmlFor="checkBox">
                <i
                  className={clicked ? "ri-close-line" : "ri-menu-line"}
                />{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
