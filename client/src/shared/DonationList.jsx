import React from "react";
import Donation from "./Donation.jsx";
import zipcodes from "zipcodes";

const DonationList = ({
  fetch,
  showDashboard,
  donations,
  userZipcode,
  // distance,
  // cityDetails,
  // setTempListings,
  // tempListings,
}) => {
  const color = showDashboard ? "donation-list-blue" : "donation-list-yellow";
  // const distance = zipcodes.distance(userZipcode, zipcode);
  // const cityDetails = zipcodes.lookup(zipcode);

  return (
    <div className={`donation-list-container ${color}`}>
      <div className="donation-inner-list-container">
        {donations.length
          ? donations.map((d) => {
              // const distance = zipcodes.distance(userZipcode, d.zipcode);
              // const cityDetails = zipcodes.lookup(d.zipcode);
              // const newDonation = { ...d, distance: distance };
              return (
                <Donation
                  userZipcode={userZipcode}
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
                  distance={d.distance}
                  cityDetails={d.cityDetails}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default DonationList;
