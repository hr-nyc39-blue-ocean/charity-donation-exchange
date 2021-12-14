import React, { useState } from "react";
import Button from "../shared/Button.jsx";

const SortBy = ({ setUserZipcode }) => {
  const [tempZip, setTempZip] = useState(null);

  return (
    <div>
      <div className="form-styles">
        <div className="sort-by-title">Sort by distance:</div>
        <input
          className="zip-input"
          type="input"
          id="zipcode"
          name="sortby"
          placeholder="Enter Zipcode"
          maxLength="5"
          size="14"
          onChange={(e) => {
            setTempZip(e.target.value);
          }}
        />
        <div>
          <Button
            text="Go"
            className="btn-bg-yellow"
            handleOnClick={() => {
              setUserZipcode(tempZip);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SortBy;
