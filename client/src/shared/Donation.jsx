import React, { useState } from "react";
import Button from "./Button.jsx";
import Modal from "../shared/Modal.jsx";
import {
  markDonationListingStatusComplete,
  cancelDonationListing,
} from "../../api/index.js";

const Donation = ({
  fetch,
  listingId = 1,
  date = "12/13/2021",
  showDashboard,
  name = "Jeans",
  category = "Clothing",
  quantity = 1,
  zipcode = "11220",
  status = "Open",
  claimed = "No",
}) => {
  const [showClaimModal, setShowClaimModal] = useState(false);

  const toggleClaimModal = (e) => {
    setShowClaimModal(!showClaimModal);
  };

  const handleCancelListingOnClick = () => {
    // dont delete listing from db, change status to inactive
    // inactive listings do not show on listings page on homepage but show on dashboard
    // refetch donations to refresh
    cancelDonationListing(listingId);
  };

  const handleMarkCompleteOnClick = () => {
    // mark status to complete in db
    // refetch donations to refresh
    markDonationListingStatusComplete(listingId);
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
        <div className="donation-img-styles">
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100px",
              height: "100px",
            }}
            src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
            alt="placeholder"
          />
        </div>
        <div style={{ width: "50vw" }}>
          <div>
            <span className="dontation-card-title">Listing ID: </span>
            {listingId}
          </div>
          <div>
            <span className="dontation-card-title">Date: </span>
            {date}
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
          </div>
          {showDashboard && (
            <>
              <div>
                <span className="dontation-card-title">Status: </span>
                <span>{status}</span>
              </div>
              <div>
                <span className="dontation-card-title">Claimed: </span>
                <span>{claimed}</span>
              </div>
            </>
          )}
        </div>
        {showDashboard ? (
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
          <div className="donation-card-buttons">
            <Button
              handleOnClick={toggleClaimModal}
              text="Claim"
              className="donation-button-styles"
            />
          </div>
        )}
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
