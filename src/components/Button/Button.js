// Import React and styles
import React from "react";
import "./Button.scss";

// Button1 component: renders a styled button with a label from props
export const Button1 = (props) => {
  return <button className="button__main">{props.label}</button>;
};
