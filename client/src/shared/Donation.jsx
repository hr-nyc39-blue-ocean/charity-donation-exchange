import React from "react";
import Button from "./Button.jsx";

const Donation = ({
  dashboardClicked,
  name = "Jeans",
  category = "Clothing",
  amount = "$2.00",
  location = "Queens",
  claimStatus = null,
}) => {
  return (
    <div>
      {dashboardClicked ? (
        <div>
          <div>Item name: {name}</div>
          <div>Category: {category}</div>
          <div>Location: {location}</div>
          <div>Claim status: {claimStatus}</div>
          <Button text="Cancel Listing" />
          <Button text="Mark As Complete" />
        </div>
      ) : (
        <div>
          <div>Item name: {name}</div>
          <div>Category: {category}</div>
          <div>Amount: {amount}</div>
          <div>Location: {location}</div>
          <Button text="Claim" />
        </div>
      )}
    </div>
  );
};

export default Donation;
