import React, { useState } from "react";
import Button from "../shared/Button.jsx";
import SortBy from "../components/SortBy.jsx";
import Modal from "../shared/Modal.jsx";

const NavBar = ({
  setNewestView,
  fetch,
  setDonations,
  userId,
  showDashboard,
  setShowDashboard,
  setIsLoggedIn,
  setUserZipcode,
  fetchUserDonations,
}) => {
  const [showNewListingModal, setShowNewListingModal] = useState(false);

  const handleHomeOnClick = () => {
    setShowDashboard(false);
  };

  const handleLogoutOnClick = () => {
    setIsLoggedIn(false);
    setShowDashboard(false);
  };

  const toggleNewListingModal = () => {
    setShowNewListingModal(!showNewListingModal);
  };

  const buttons = [
    {
      text: "Home",
      handleOnClick: handleHomeOnClick,
    },
    {
      text: "Create A New Listing",
      handleOnClick: toggleNewListingModal,
    },
    {
      text: "Logout",
      handleOnClick: handleLogoutOnClick,
    },
  ];

  return (
    <div className="navbar">
      {showDashboard ? (
        <div className="dashboard-nav-bar">
          {buttons.map((b) => {
            return (
              <Button
                handleOnClick={b.handleOnClick}
                text={b.text}
                className="btn-bg-blue"
              />
            );
          })}
        </div>
      ) : (
        <div className="home-nav-bar">
          <SortBy
            setNewestView={setNewestView}
            fetch={fetch}
            setUserZipcode={setUserZipcode}
            setDonations={setDonations}
          />
        </div>
      )}
      {showNewListingModal && (
        <Modal
          userId={userId}
          newListingModal={showNewListingModal}
          toggleModal={toggleNewListingModal}
          fetchUserDonations={fetchUserDonations}
        />
      )}
    </div>
  );
};

export default NavBar;
