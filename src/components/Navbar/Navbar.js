import React, { useState } from "react";
import "./Navbar.scss";

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__left">
          <button>
            <h3>Karma</h3>
          </button>
        </div>

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

            <div
              className="navbar__three-bars"
              onClick={() => {
                setClicked(clicked ? false : true);
              }}
            >
              <label htmlFor="checkBox">
                <i className={clicked ? "ri-close-line" : "ri-menu-line"} />{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
