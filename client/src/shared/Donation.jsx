import React, { useState } from "react";
import dateFormatter from "iso-date-formatter";
import Button from "./Button.jsx";
import Modal from "../shared/Modal.jsx";
import {
  markDonationListingStatusComplete,
  cancelDonationListing,
} from "../../api/index.js";

const Donation = ({
  showDashboard,
  fetch,
  listingId,
  date,
  name,
  category,
  quantity,
  zipcode,
  status,
  claimed,
  claimerName,
  claimerEmail,
  claimerPhone,
  distance,
  cityDetails,
}) => {
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [dashboardButtonsClicked, setDashboardButtonsClicked] = useState(false);
  const isoDate = date;

  console.log("showDashboard", showDashboard);

  const formattedDate = dateFormatter(isoDate, {
    format: "MMM d, yyyy",
    namedMonths: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  });

  const toggleClaimModal = (e) => {
    setShowClaimModal(!showClaimModal);
  };

  const handleCancelListingOnClick = () => {
    !dashboardButtonsClicked &&
      cancelDonationListing(listingId).then(() => {
        fetch();
        setDashboardButtonsClicked(true);
      });
  };

  const handleMarkCompleteOnClick = () => {
    !dashboardButtonsClicked &&
      markDonationListingStatusComplete(listingId).then(() => {
        fetch();
        setDashboardButtonsClicked(true);
      });
  };

  const dashboardButtons = [
    {
      text: "Cancel Listing",
      handleOnClick: handleCancelListingOnClick,
    },
    {
      text: "Mark As Complete",
      handleOnClick: handleMarkCompleteOnClick,
    },
  ];

  return (
    <div className="donation-container">
      <div className="donation-card-layout">
        <div className="donation-img-container">
          <img
            className="donation-img-styles"
            src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
            alt="placeholder"
          />
        </div>
        <div className="donation-details-container">
          <div>
            <span className="dontation-card-title">Listing ID: </span>
            {listingId}
          </div>
          <div>
            <span className="dontation-card-title">Date: </span>
            {formattedDate}
          </div>
          <div>
            <span className="dontation-card-title">Item name: </span>
            {name}
          </div>
          <div>
            <span className="dontation-card-title">Category: </span>
            {category}
          </div>
          <div>
            <span className="dontation-card-title">Quantity: </span>
            {quantity}
          </div>
          <div>
            <span className="dontation-card-title">Zipcode: </span>
            {zipcode}
            {cityDetails && `- ${cityDetails.city}, ${cityDetails.state}`}
          </div>
        </div>
        <div className="donation-claimed-details-container">
          {distance >= 0 && (
            <div>
              <span className="dontation-card-title">Distance: </span>
              <span>{`${distance} miles`}</span>
            </div>
          )}
          {showDashboard && (
            <div>
              <div>
                <span className="dontation-card-title">Status: </span>
                <span>{status}</span>
              </div>
              <div>
                <span className="dontation-card-title">Claimed: </span>
                <span>{claimed === "true" ? "Yes" : "No"}</span>
              </div>
              <div>
                {claimed === "true" && (
                  <div>
                    <div>
                      <span className="dontation-card-title">Name: </span>
                      <span>{claimerName}</span>
                    </div>
                    <div>
                      <span className="dontation-card-title">Email: </span>
                      <span>{claimerEmail}</span>
                    </div>
                    <div>
                      <span className="dontation-card-title">Phone: </span>
                      <span>{claimerPhone}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="donation-card-buttons">
          {showDashboard && status !== "closed" && status !== "cancelled" && (
            <div className="donation-distance-container">
              {dashboardButtons.map((d) => {
                return (
                  <Button
                    className="donation-button-styles"
                    text={d.text}
                    handleOnClick={d.handleOnClick}
                  />
                );
              })}
            </div>
          )}

          {/* {showDashboard && status !== "closed" && status !== "cancelled" ? (
          <div className="donation-card-buttons">
            {dashboardButtons.map((d) => {
              return (
                <Button
                  className="donation-button-styles"
                  text={d.text}
                  handleOnClick={d.handleOnClick}
                />
              );
            })}
          </div>
        ) : (
          <div className="donation-card-buttons"></div>
        )}*/}
          {!showDashboard && (
            <div className="donation-distance-container">
              <Button
                handleOnClick={toggleClaimModal}
                text="Claim"
                className={"donation-button-styles"}
              />
            </div>
          )}
        </div>
        {/* : (
        <div className="donation-card-buttons"></div>
        )} */}
      </div>
      {showClaimModal && (
        <Modal
          listingId={listingId}
          claimModal={showClaimModal}
          toggleModal={toggleClaimModal}
        />
      )}
    </div>
  );
};

export default Donation;
