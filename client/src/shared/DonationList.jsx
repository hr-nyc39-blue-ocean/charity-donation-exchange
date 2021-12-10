import React, { useState } from "react";
import Donation from "./Donation.jsx";

const DonationList = ({ width, height, dashboardClicked }) => {
  const [donations, setDonations] = useState([]);
  return (
    <div
      style={{
        width: width + "vw",
        height: height + "vh",
        border: "1px solid black",
      }}
    >
      Donation List
      <Donation dashboardClicked={dashboardClicked} />
    </div>
  );
};

export default DonationList;
