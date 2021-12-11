import React, { useState } from "react";
import Button from "../shared/Button.jsx";
import Logo from "../../dist/img/HomeLogo.png";
import Modal from "../shared/Modal.jsx";

const NotLoggedInHeader = ({ setIsLoggedIn, setUserId }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleLoginModal = () => {
    // remove this later, this is only for testing different header state
    setIsLoggedIn(true);

    setShowLoginModal(!showLoginModal);
  };
  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  return (
    <div className="home-header">
      <div className="header-row">
        <img id="logo" src={Logo} alt="Logo" />
        <div className="header-layout">
          <div className="header-title">
            <div>CHARITY DONATION EXCHANGE</div>
          </div>
        </div>
        <div className="header-buttons-container">
          <div className="header-buttons-styles">
            <Button handleOnClick={toggleLoginModal} text="Login" />
          </div>
          <div className="header-buttons-styles">
            <Button handleOnClick={toggleSignUpModal} text="Sign up" />
          </div>
        </div>
      </div>
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

export default NotLoggedInHeader;
