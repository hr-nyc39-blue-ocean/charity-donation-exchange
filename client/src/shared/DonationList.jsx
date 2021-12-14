import React, { useState, useEffect } from "react";
import Donation from "./Donation.jsx";

const DonationList = ({ showDashboard, donations }) => {
  const color = showDashboard ? "donation-list-blue" : "donation-list-yellow";

  // const fetchAllListings = () => {
  //   getAllDonations();
  // };

  const fetchUserListings = () => {};

  // create fetch fx to refetch donations
  const fetch = () => {};

  return (
    <div className={`donation-list-container ${color}`}>
      <div className="donation-inner-list-container">
        {donations.length
          ? donations.map((d) => {
              return (
                <Donation
                  showDashboard={showDashboard}
                  fetch={fetch}
                  listingId={d.listingID}
                  date={d.date}
                  name={d.name}
                  category={d.category}
                  quantity={d.quantity}
                  zipcode={d.zipcode}
                  status={d.status}
                  claimed={d.claimed}
                  claimerName={d.claimerName}
                  claimerEmail={d.claimerEmail}
                  claimerPhone={d.claimerPhone}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default DonationList;
