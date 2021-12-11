import React, { useState } from "react";
import Donation from "./Donation.jsx";

const DonationList = ({ showDashboard }) => {
  const [donations, setDonations] = useState([]);
  return (
    <div
      style={{
        width: "100vw",
        height: "65vh",
        border: "1px solid black",
      }}
    >
      <Donation showDashboard={showDashboard} />
    </div>
  );
};

export default DonationList;
