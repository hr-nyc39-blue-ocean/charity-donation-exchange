import React, { useState } from "react";
import Donation from "./Donation.jsx";

const DonationList = ({ showDashboard }) => {
  const [donations, setDonations] = useState([]);

  const color = showDashboard ? "donation-list-blue" : "donation-list-yellow";

  // create fetch fx to refetch donations
  const fetch = () => {};
  return (
    <div className={`donation-list-container ${color}`}>
      <Donation fetch={fetch} showDashboard={showDashboard} />
    </div>
  );
};

export default DonationList;
