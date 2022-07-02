import React from "react";
import "./lowerPage2.css";
import image1 from "./images/image1.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";


import {Button1} from "./button1";
// import { LowerPage1 } from "./lowerPage1";

const LowerPage2Item = (props) => {

  
      

    return(
        <div className={`item  ${props.class}`} >
            <div className="item-left">
                  <div className="item-image">
                        <img src={props.image} alt=""/>
                  </div>
            </div>

            <div className="item-right">
                  <div className="item-details">
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
      heading: "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion: "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
    },

    {
      class: "item-even",
      image: image6,
      heading: "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion: "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
    },

    {
      class: "item-oud",
      image: image7,
      heading: "Pngtree provides HQ Amazing Skin care product set transparent images. Browse our Skin care product set collection.",
      describtion: "Use these free 3d,bottle,stereoscopic PNG transparent background. All images commercial use available for premium member, copyright guarantee.",
    },

    
  ];

  return (
    <div className="lowerPage2-container">
      <div className="lowerPage2">
       
        {items.map((item , index) => {
          // const {background,} = item
          return (
            <LowerPage2Item key={index}
              class = {item.class}
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
