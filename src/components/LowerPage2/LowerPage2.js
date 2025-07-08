// Import React, styles, images, and components
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LowerPage2.scss";
import image1 from "../../assets/images/image1.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";
import { Button1 } from "../Button/Button";
gsap.registerPlugin(ScrollTrigger);

// LowerPage2Item component: displays a single item with image, heading, description, and button
const LowerPage2Item = (props) => {
  const itemRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    const el = itemRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    gsap.fromTo(
      left,
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
    gsap.fromTo(
      right,
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);
  return (
    <div ref={itemRef} className={`lower-page2__item  ${props.class}`}>
      <div ref={leftRef} className="lower-page2__item-left">
        <div className="lower-page2__item-image scale-hover">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div ref={rightRef} className="lower-page2__item-right">
        <div className="lower-page2__item-details">
          <h4>{props.heading}</h4>
          <p>{props.describtion}</p>
          <Button1 label="Buy Now" />
        </div>
      </div>
    </div>
  );
};

// LowerPage2 component: displays a list of items with alternating layouts
export const LowerPage2 = () => {
  const sectionRef = useRef(null);
  // Items data array
  const items = [
    {
      class: "item-oud",
      image: image1,
      heading:
        "Experience the science of beauty with dermatologist-approved formulas.",
      describtion:
        "Our products are cruelty-free, paraben-free, and designed for all skin types. Unlock your best skin today!",
    },

    {
      class: "item-even",
      image: image6,
      heading:
        "Experience the science of beauty with dermatologist-approved formulas.",
      describtion:
        "Our products are cruelty-free, paraben-free, and designed for all skin types. Unlock your best skin today!",
    },

    {
      class: "item-oud",
      image: image7,
      heading:
        "Experience the science of beauty with dermatologist-approved formulas.",
      describtion:
        "Our products are cruelty-free, paraben-free, and designed for all skin types. Unlock your best skin today!",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelector(".lower-page2"),
      { opacity: 0, scale: 0.95 },
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
    <div ref={sectionRef} className="lower-page2__container">
      <div className="lower-page2">
        {items.map((item, index) => {
          return (
            <LowerPage2Item
              key={index}
              class={item.class}
              image={item.image}
              heading={item.heading}
              describtion={item.describtion}
            />
          );
        })}
      </div>
    </div>
  );
};
