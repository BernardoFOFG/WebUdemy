import React from "react";
import "./style.css";

export default (props) => (
  <button
    className={`button ${props.className}`}
    onClick={(e) => props.click && props.click(props.label)}
  >
    {props.label}
  </button>
);
