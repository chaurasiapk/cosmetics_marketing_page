import React from "react";
import "./LowerPage2.scss";
import image1 from '../../assets/images/image1.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';

import { Button1 } from '../Button/Button';

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

export const LowerPage2 = () => {
  const items = [
    {
      class: "item-oud",
      image: image1,
      heading:
        "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion:
        "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
    },

    {
      class: "item-even",
      image: image6,
      heading:
        "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion:
        "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
    },

    {
      class: "item-oud",
      image: image7,
      heading:
        "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion:
        "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
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
