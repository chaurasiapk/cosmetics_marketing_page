import React from "react";
import './Button.scss';

export const Button1 = (props) => {
  return <button className="button__main">{props.label}</button>;
};
