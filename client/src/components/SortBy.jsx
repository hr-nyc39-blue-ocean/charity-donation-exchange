import React from "react";
import Button from "../shared/Button.jsx";

const SortBy = () => {
  const handleOnChange = (e) => {
    const selected = e.target.value;
  };
  return (
    <div>
      <form className="form-styles">
        <div className="sort-by-title">Sort by:</div>
        <div>
          <input
            type="radio"
            id="html"
            name="sortby"
            value="newest"
            defaultChecked={true}
          />
           <label htmlFor="html">Newest</label>
        </div>
        <div>
          <input type="radio" id="css" name="sortby" value="distance" /> 
          <label htmlFor="css">Distance</label>
        </div>
        <div className="zip-input-container">
          <label htmlFor="css">Zipcode:</label>
          <input
            className="zip-input"
            type="input"
            id="zipcode"
            name="sortby"
            placeholder="Enter Zipcode"
            maxLength="5"
            size="14"
          />
        </div>
        <div>
          <input type="submit" id="submit" value="Go" />
        </div>
      </form>
    </div>
  );
};

export default SortBy;
