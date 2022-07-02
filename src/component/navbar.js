import React, { useState } from "react";
import "./navbar.css";
import "remixicon/fonts/remixicon.css";

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="left-nav">
          <button>
            <h3>Karma</h3>
          </button>
        </div>

        <div className="right-nav">
          <div className="menu-bar">
            <input type="checkbox" id="checkBox" />
            <ul>
              <li>
                <button>Shop</button>
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
              className="three-Bars"
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
