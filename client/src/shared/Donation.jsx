import React, { useState } from "react";
import Button from "./Button.jsx";
import Modal from "../shared/Modal.jsx";

const Donation = ({
  listingId = 1,
  showDashboard,
  name = "Jeans",
  category = "Clothing",
  quantity = "1",
  location = "Queens",
  claimStatus = null,
}) => {
  const [showClaimModal, setShowClaimModal] = useState(false);

  const toggleClaimModal = (e) => {
    setShowClaimModal(!showClaimModal);
  };

  const handleCancelListingOnClick = () => {
    // dont delete listing from db, change status to inactive
    // inactive listings do not show on listings page on homepage but show on dashboard
  };

  const MarkCompleteOnClick = () => {
    // mark status to complete in db
  };

  return (
    <div className="donation-container">
      {showDashboard ? (
        <div className="donation-card-layout">
          <div>
            <div>Id: {listingId}</div>
            <div>Item name: {name}</div>
            <div>Category: {category}</div>
            <div>Quantity: {quantity}</div>
            <div>Location: {location}</div>
            <div>Claim status: {claimStatus}</div>
          </div>
          <div className="donation-card-buttons">
            <div className="donation-button-styles">
              <Button text="Cancel Listing" />
            </div>
            <div className="donation-button-styles">
              <Button text="Mark As Complete" />
            </div>
          </div>
        </div>
      ) : (
        <div className="donation-card-layout">
          <div>
            <div>Listing Id: {listingId}</div>
            <div>Item name: {name}</div>
            <div>Category: {category}</div>
            <div>Quantity: {quantity}</div>
            <div>Location: {location}</div>
          </div>
          <div className="donation-card-buttons">
            <Button handleOnClick={toggleClaimModal} text="Claim" />
          </div>
        </div>
      )}
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
