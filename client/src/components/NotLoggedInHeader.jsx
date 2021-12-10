import React from "react";
import Button from "../shared/Button.jsx";

const NotLoggedInHeader = ({ setIsLoggedIn }) => {
  const handleLoginOnClick = () => {
    setIsLoggedIn(true);
  };
  return (
    <div style={{ height: "25vh", width: "100vw", border: "1px solid black" }}>
      <div>
        <div>LOGO</div>
        <div>
          <Button handleOnClick={handleLoginOnClick} text="Login" />
          <Button text="Sign up" />
        </div>
      </div>
      CHARITY DONATION EXCHANGE
    </div>
  );
};

export default NotLoggedInHeader;
