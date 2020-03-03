import React from "react";
import './button.scss';

const Button = ({ type, onClick }) => {
  return <button className="btn draw-border" onClick={onClick}>{type}</button>;
};

export default Button;
