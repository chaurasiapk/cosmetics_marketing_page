// Import React and styles
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./Navbar.scss";

// NavBar component: renders the navigation bar with menu and responsive toggle
export const NavBar = () => {
  // State to handle menu toggle for mobile view
  const [clicked, setClicked] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    // Animate navbar fade in and slide down
    gsap.fromTo(
      el,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    // Animate menu buttons with stagger
    const menuButtons = el.querySelectorAll(".navbar__menu-bar ul button");
    gsap.fromTo(
      menuButtons,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div ref={navRef} className="navbar__container">
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
