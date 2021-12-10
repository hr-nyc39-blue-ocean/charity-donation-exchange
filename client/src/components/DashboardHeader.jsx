import React from "react";
import Button from "../shared/Button.jsx";

const DashboardHeader = ({ setDashboardClicked, setIsLoggedIn }) => {
  const handleHomeOnClick = () => {
    setDashboardClicked(false);
  };
  const handleLogoutOnClick = () => {
    setIsLoggedIn(false);
    setDashboardClicked(false);
  };
  return (
    <div style={{ height: "25vh", width: "100vw", border: "1px solid black" }}>
      <div>This is the Dashboard Header</div>
      <div>
        <Button handleOnClick={handleHomeOnClick} text="Home" />
        <Button text="Create a New Listing" />
        <Button handleOnClick={handleLogoutOnClick} text="Logout" />
      </div>
    </div>
  );
};

export default DashboardHeader;
