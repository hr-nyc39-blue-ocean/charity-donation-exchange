import React, { useState, useEffect } from "react";
import Button from "../shared/Button.jsx";

const SortBy = ({ setUserZipcode, setDonations, fetch, setNewestView }) => {
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
        <div className="sort-by-buttons">
          <Button
            text="Go"
            className="btn-bg-yellow"
            handleOnClick={() => {
              setUserZipcode(tempZip);
              setNewestView(false);
            }}
          />
          <div>or</div>
          <Button
            text="Newest"
            className="btn-bg-yellow"
            handleOnClick={() => {
              fetch().then((r) => setDonations(r.data));
              setNewestView(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SortBy;
