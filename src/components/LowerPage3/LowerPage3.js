// Import React, styles, and components
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button1 } from "../Button/Button";
import "./LowerPage3.scss";
gsap.registerPlugin(ScrollTrigger);

// LowerPage3 component: displays a section with content and a button
export const LowerPage3 = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelector(".lower-page3__content"),
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div ref={sectionRef} className="lower-page3__container">
      <div className="lower-page3">
        <div className="lower-page3__content">
          <h4>Unleash Your Inner Glow</h4>
          <p>
            Nourish, hydrate, and rejuvenate with our exclusive cosmetics collection.
          </p>
          <Button1 label="click" />
        </div>
      </div>
    </div>
  );
};
