import React from "react";
import LoggedInHeader from "./LoggedInHeader.jsx";
import NotLoggedInHeader from "./NotLoggedInHeader.jsx";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";

const Home = ({
  setUserId,
  showDashboard,
  setShowDashboard,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <div className="home global">
      {isLoggedIn ? (
        <LoggedInHeader
          setIsLoggedIn={setIsLoggedIn}
          setShowDashboard={setShowDashboard}
        />
      ) : (
        <NotLoggedInHeader
          setIsLoggedIn={setIsLoggedIn}
          setUserId={setUserId}
        />
      )}
      <NavBar showDashboard={showDashboard} />
      <DonationList showDashboard={showDashboard} />
    </div>
  );
};

export default Home;
