import React, { useEffect, useState } from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import Header from "../components/Header.jsx";
import Modal from "../shared/Modal.jsx";
import HomeLogo from "../../dist/img/HomeLogo.png";
import { getAllDonations, getNonCharityListings } from "../../api/index.js";
import zipcodes from "zipcodes";

const Home = ({
  setSeeAllListings,
  seeAllListings,
  setUserId,
  showDashboard,
  setShowDashboard,
  isLoggedIn,
  setIsLoggedIn,
  setUsername,
  username,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [donations, setDonations] = useState([]);
  const [userZipcode, setUserZipcode] = useState(null);
  const [tempListings, setTempListings] = useState([]);
  const [newestView, setNewestView] = useState(true);
  const [distanceListings, setDistanceListings] = useState([]);

  const fetch = seeAllListings ? getAllDonations : getNonCharityListings;

  useEffect(() => {
    fetch().then((r) => setDonations(r.data));
  }, [seeAllListings]);

  useEffect(() => {
    if (donations.length !== 0) {
      const newListings = [];
      for (let i = 0; i < donations.length; i++) {
        const currentDonation = donations[i];
        const { zipcode } = currentDonation;
        const distance = zipcodes.distance(userZipcode, zipcode);
        const cityDetails = zipcodes.lookup(zipcode);
        const newDonation = {
          ...currentDonation,
          distance: distance,
          cityDetails: cityDetails,
        };
        newListings.push(newDonation);
      }
      setTempListings(newListings);
    }
  }, [userZipcode]);

  useEffect(() => {
    if (tempListings.length !== 0) {
      for (let i = 0; i < tempListings.length; i++) {
        const currentListing = tempListings[i];
        if (currentListing.distance === null) {
          currentListing.distance = 100000000;
        }
      }
      tempListings.sort((a, b) => (a.distance > b.distance ? 1 : -1));

      const under100MiListings = [];

      for (let j = 0; j < tempListings.length; j++) {
        const { distance } = tempListings[j];
        if (distance <= 100) {
          under100MiListings.push(tempListings[j]);
        }
      }

      setDistanceListings(under100MiListings);
      setDonations(distanceListings);
    }
  }, [tempListings]);

  useEffect(() => {
    newestView
      ? fetch().then((r) => setDonations(r.data))
      : setDonations(distanceListings);
  }, [newestView, distanceListings]);

  const toggleLoginModal = () => {
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
    headerTitle: `WELCOME, ${username}`,
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
      <NavBar
        setNewestView={setNewestView}
        fetch={fetch}
        showDashboard={showDashboard}
        setUserZipcode={setUserZipcode}
        setDonations={setDonations}
      />
      <DonationList
        donations={donations}
        showDashboard={showDashboard}
        userZipcode={userZipcode}
      />
      {showLoginModal && (
        <Modal
          setSeeAllListings={setSeeAllListings}
          setIsLoggedIn={setIsLoggedIn}
          setUserId={setUserId}
          loginModal={showLoginModal}
          toggleModal={toggleLoginModal}
          setUsername={setUsername}
        />
      )}
      {showSignUpModal && (
        <Modal signupModal={showSignUpModal} toggleModal={toggleSignUpModal} />
      )}
    </div>
  );
};

export default Home;
