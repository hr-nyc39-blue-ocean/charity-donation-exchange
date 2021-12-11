import React from "react";
import Button from "../shared/Button.jsx";
import Logo from "../../dist/img/HomeLogo.png";

const LoggedInHeader = ({ setIsLoggedIn, setShowDashboard }) => {
  const handleLogoutOnClick = () => {
    setIsLoggedIn(false);
  };
  const handleDashboardOnClick = () => {
    setShowDashboard(true);
  };

  return (
    <div className="home-header">
      <div className="header-row">
        <img id="logo" src={Logo} alt="logo" />
        <div className="header-layout">
          <div className="header-title">
            <div>WELCOME, NAME!</div>
          </div>
        </div>
        <div className="header-buttons-container">
          <div className="header-buttons-styles">
            <Button handleOnClick={handleLogoutOnClick} text="Logout" />
          </div>
          <div className="header-buttons-styles">
            <Button handleOnClick={handleDashboardOnClick} text="Dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
