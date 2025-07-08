// Import React, images, and components
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import { Button1 } from "../Button/Button";
import "./LowerPage1.scss";
gsap.registerPlugin(ScrollTrigger);

// Cards component: displays a product card with image, heading, rating, price, and button
const Cards = (props) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.source} alt="image1" />
      </div>
      <div className="card__body">
        <div className="card__heading">
          <h5 style={{ textAlign: "center" }}>
            {props.heading}
            <br />
            {/* {props.type} */}
          </h5>
        </div>
        <div className="card__rating">
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
        </div>
        <div className="card__price">
          <p>$ {props.price}</p>
        </div>
        <Button1 label="Buy Now" />
      </div>
    </div>
  );
};

// LowerPage1 component: displays a section with a heading and a list of product cards
export const LowerPage1 = () => {
  const sectionRef = useRef(null);
  // Product data array
  const product = [
    {
      heading: "Radiant Glow Serum",
      price: 125.95,
      type: "Serum",
      source: image2,
    },
    {
      heading: "HydraBoost Moisturizer",
      price: 125.95,
      type: "Moisturizer",
      source: image3,
    },
    {
      heading: "Velvet Touch Cleanser",
      price: 125.95,
      type: "Cleanser",
      source: image4,
    },
    {
      heading: "Luminous Night Cream",
      price: 125.95,
      type: "Night Cream",
      source: image5,
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelector(".lower-page1__up h3"),
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
    const cards = el.querySelectorAll(".card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2 + i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="lower-page1__container">
      <div className="lower-page1">
        {/* Section heading */}
        <div className="lower-page1__up">
          <h3>
            Healthy Hair,
            <br />
            Wildly you
          </h3>
        </div>

        {/* Product cards section */}
        <div className="lower-page1__down">
          <div className="card-container">
            {product.map((card, index) => {
              return (
                <Cards
                  key={index}
                  heading={card.heading}
                  type={card.type}
                  price={card.price}
                  source={card.source}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
