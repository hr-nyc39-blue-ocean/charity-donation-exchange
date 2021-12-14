import React, { useEffect, useState } from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import Header from "../components/Header.jsx";
import Modal from "../shared/Modal.jsx";
import HomeLogo from "../../dist/img/HomeLogo.png";
import { getAllDonations, getNonCharityDonations } from "../../api/index.js";

const Home = ({
  seeAllListings,
  setUserId,
  showDashboard,
  setShowDashboard,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getAllDonations().then((r) => setDonations(r.data));
  }, []);

  const toggleLoginModal = () => {
    // remove this later, this is only for testing different header state
    setIsLoggedIn(true);

    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleLogoutOnClick = () => {
    setIsLoggedIn(false);
  };

  const handleDashboardOnClick = () => {
    setShowDashboard(true);
  };

  const loggedInProps = {
    headerTitle: "WELCOME, NAME",
    buttons: [
      {
        text: "Logout",
        handleOnClick: handleLogoutOnClick,
      },
      {
        text: "Dashboard",
        handleOnClick: handleDashboardOnClick,
      },
    ],
  };

  const notLoggedInProps = {
    headerTitle: "CHARITY DONATION EXCHANGE",
    buttons: [
      {
        text: "Login",
        handleOnClick: toggleLoginModal,
      },
      {
        text: "Sign up",
        handleOnClick: toggleSignUpModal,
      },
    ],
  };

  const headerProps = isLoggedIn ? loggedInProps : notLoggedInProps;
  const { headerTitle, buttons } = headerProps;

  return (
    <div className="home global">
      <Header
        headerTitle={headerTitle}
        buttons={buttons}
        logo={HomeLogo}
        colorClassName="yellow"
      />
      <NavBar showDashboard={showDashboard} />
      <DonationList donations={donations} showDashboard={showDashboard} />
      {showLoginModal && (
        <Modal
          setIsLogginIn={setIsLoggedIn}
          setUserId={setUserId}
          loginModal={showLoginModal}
          toggleModal={toggleLoginModal}
        />
      )}
      {showSignUpModal && (
        <Modal signupModal={showSignUpModal} toggleModal={toggleSignUpModal} />
      )}
    </div>
  );
};

export default Home;
