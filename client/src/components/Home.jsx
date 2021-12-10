import React from "react";
import LoggedInHeader from "./LoggedInHeader.jsx";
import NotLoggedInHeader from "./NotLoggedInHeader.jsx";
import DonationList from "../shared/DonationList.jsx";

const Home = ({
  dashboardClicked,
  setDashboardClicked,
  isLoggedIn,
  setIsLoggedIn,
}) => {
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
      <DonationList
        dashboardClicked={dashboardClicked}
        width={100}
        height={70}
      />
    </>
  );
};

export default Home;
