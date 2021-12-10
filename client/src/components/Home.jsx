import React, { useState } from "react";
import LoggedInHeader from "./LoggedInHeader.jsx";
import NotLoggedInHeader from "./NotLoggedInHeader.jsx";
import DonationList from "../shared/DonationList.jsx";

const Home = ({ setDashboardClicked, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <LoggedInHeader
          setIsLoggedIn={setIsLoggedIn}
          setDashboardClicked={setDashboardClicked}
        />
      ) : (
        <NotLoggedInHeader setIsLoggedIn={setIsLoggedIn} />
      )}
      <DonationList width={100} height={70} />
    </>
  );
};

export default Home;
