import React from "react";
import Button from "../shared/Button.jsx";

const LoggedInHeader = ({ setIsLoggedIn, setDashboardClicked }) => {
  const handleLogoutOnClick = () => {
    setIsLoggedIn(false);
  };
  const handleDashboardOnClick = () => {
    setDashboardClicked(true);
  };

  return (
    <div style={{ height: "25vh", width: "100vw", border: "1px solid black" }}>
      <div>
        <div>LOGO</div>
        <div>
          <Button handleOnClick={handleLogoutOnClick} text="Logout" />
          <Button handleOnClick={handleDashboardOnClick} text="Dashboard" />
        </div>
      </div>
      WELCOME, NAME!
    </div>
  );
};

export default LoggedInHeader;
