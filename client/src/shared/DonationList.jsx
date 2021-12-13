import React, { useState, useEffect } from "react";
import Donation from "./Donation.jsx";
import { getAllDonations, getDonationsForDashboard } from "../../api/index.js";

const DonationList = ({ showDashboard }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getAllDonations().then((r) => {
      console.log("here");
      setDonations(r);
    });
  }, []);

  // console.log("front end getAllDonations pull >>>>>>>>", donations);

  const color = showDashboard ? "donation-list-blue" : "donation-list-yellow";

  const fetchAllListings = () => {
    getAllDonations();
  };

  const fetchUserListings = () => {};

  // create fetch fx to refetch donations
  const fetch = () => {};
  return (
    <div className={`donation-list-container ${color}`}>
      <Donation fetch={fetch} showDashboard={showDashboard} />
    </div>
  );
};

export default DonationList;
