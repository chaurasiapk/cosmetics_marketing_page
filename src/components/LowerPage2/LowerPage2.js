// Import React, styles, images, and components
import React from "react";
import "./LowerPage2.scss";
import image1 from "../../assets/images/image1.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";

import { Button1 } from "../Button/Button";

// LowerPage2Item component: displays a single item with image, heading, description, and button
const LowerPage2Item = (props) => {
  return (
    <div className={`lower-page2__item  ${props.class}`}>
      <div className="lower-page2__item-left">
        <div className="lower-page2__item-image">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div className="lower-page2__item-right">
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

  return (
    <div className="lower-page2__container">
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
