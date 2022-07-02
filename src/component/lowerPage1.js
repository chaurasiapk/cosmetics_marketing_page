import React from "react";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import { Button1 } from "./button1";
import "remixicon/fonts/remixicon.css";

import "./lowerPage1.css";

const Cards = (props) => {
  
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-image">
          <img src={props.source} alt="image1"/>
        </div>

        <div className="card-heading">
          <h5 style={{ textAlign: "center" }}>
            {props.heading}
            <br />
            {props.type}
          </h5>
        </div>

        <div className="card-rating">
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
          <i className="ri-star-s-fill"></i>
        </div>

        <div className="card-price">
          <p>$ {props.price}</p>
        </div>

        <Button1 label="Buy Now" />
      </div>
    </div>
  );
};

export const LowerPage1 = () => {
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
    <div className="LowerPage1-Container">
      <div className="LowerPage1">
        <div className="LowerPage1-up">
          <h3>
            Healthy Hair,
            <br />
            Wildly you
          </h3>
        </div>

        <div className="LowerPage1-down">
          <div className="card-container">
            {product.map((card , index) => {
              return <Cards key={index} heading={card.heading} type={card.type} price={card.price} source={card.source} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
