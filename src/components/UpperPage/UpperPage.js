// Import React, styles, images, and components
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./UpperPage.scss";
import image1 from "../../assets/images/image1.png";
import { Button1 } from "../Button/Button";
gsap.registerPlugin(ScrollTrigger);

// UpperPage component: displays the top section with heading, description, image, and buttons
export const UpperPage = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelector(".upper-page__left h1"),
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      el.querySelector(".upper-page__left p"),
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      el.querySelector(".upper-page__right img"),
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div ref={sectionRef} className="upper-page__container">
      <div className="upper-page">
        {/* Left section: Heading, description, and buttons */}
        <div className="upper-page__left">
          <h1>Discover Good Karma</h1>
          <p>
            Reveal your natural radiance with our luxurious skincare essentials.
          </p>
          <Button1 label="Buy Now" />
          <button className="upper-page__see-more">See more...</button>
        </div>

        {/* Right section: Image */}
        <div className="upper-page__right">
          <img src={image1} alt="image1" />
        </div>
      </div>
    </div>
  );
};
