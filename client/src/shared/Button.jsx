import React from "react";

const Button = ({ className, text, handleOnClick }) => (
  <div className="btn-container">
    <button className={`btn-styles ${className}`} onClick={handleOnClick}>
      {text}
    </button>
  </div>
);

export default Button;
