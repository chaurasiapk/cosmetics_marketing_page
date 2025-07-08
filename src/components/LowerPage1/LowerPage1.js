// Import React, images, and components
import React from "react";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import { Button1 } from "../Button/Button";

import "./LowerPage1.scss";

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
            {props.type}
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
  // Product data array
  const product = [
    {
      heading: "Product-Heading-1",
      price: 125.95,
      type: "type-1",
      source: image2,
    },
    {
      heading: "Product-Heading-2",
      price: 125.95,
      type: "type-2",
      source: image3,
    },
    {
      heading: "Product-Heading-3",
      price: 125.95,
      type: "type-3",
      source: image4,
    },
    {
      heading: "Product-Heading-4",
      price: 125.95,
      type: "type-4",
      source: image5,
    },
  ];

  return (
    <div className="lower-page1__container">
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
