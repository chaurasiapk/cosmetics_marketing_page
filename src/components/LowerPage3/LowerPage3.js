// Import React, styles, and components
import React from "react";
import { Button1 } from "../Button/Button";

import "./LowerPage3.scss";

// LowerPage3 component: displays a section with content and a button
export const LowerPage3 = () => {
  return (
    <div className="lower-page3__container">
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
