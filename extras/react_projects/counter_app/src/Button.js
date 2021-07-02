import React from "react";

const Button = ({ onClick, text, variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
