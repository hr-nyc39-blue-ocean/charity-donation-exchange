import React from "react";

const Input = ({ max, width }) => {
  return <input maxLength={max} style={{ width: width + "px" }}></input>;
};

export default Input;
