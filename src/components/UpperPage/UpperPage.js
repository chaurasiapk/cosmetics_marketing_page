import React from "react";
import "./UpperPage.scss";
import image1 from '../../assets/images/image1.png';
import { Button1 } from '../Button/Button';

export const UpperPage = () => {
  return (
    <div className="upper-page__container">
      <div className="upper-page">
        <div className="upper-page__left">
          <h1>Discover Good Karma</h1>
          <p>
            Lorazepam may increase the risk of serious or life-threatening
            breathing problems,{" "}
          </p>
          <Button1 label="Buy Now" />
          <button className="upper-page__see-more">See more...</button>
        </div>

        <div className="upper-page__right">
          <img src={image1} alt="image1" />
        </div>
      </div>
    </div>
  );
};
