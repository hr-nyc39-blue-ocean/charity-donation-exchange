import React from "react";
import styled from "styled-components";
import ClaimForm from "../components/ClaimForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import SignupForm from "../components/SignupForm.jsx";
import NewListingForm from "../components/NewListingForm.jsx";
import InitialForm from "../components/InitialForm.jsx";

const Modal = ({
  listingId,
  userId,
  setIsLoggedIn,
  setUserId,
  claimModal,
  loginModal,
  signupModal,
  newListingModal,
  initialModal,
  seeAllListings,
  setSeeAllListings,
  toggleModal,
}) => {
  return (
    <div>
      <Background>
        <ModalWrapper>
          {claimModal && (
            <ClaimForm listingId={listingId} toggleModal={toggleModal} />
          )}
          {loginModal && (
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              setUserId={setUserId}
              toggleModal={toggleModal}
            />
          )}
          {signupModal && <SignupForm toggleModal={toggleModal} />}
          {newListingModal && (
            <NewListingForm userId={userId} toggleModal={toggleModal} />
          )}
          {initialModal && (
            <InitialForm
              toggleModal={toggleModal}
              seeAllListings={seeAllListings}
              setSeeAllListings={setSeeAllListings}
            />
          )}
        </ModalWrapper>
      </Background>
    </div>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  // background: rgba(200, 200, 200, 0.5);
  background: #fff9ea;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  width: 60%;
  height: 70%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  z-index: 9999;
  //justify-content: center;
  //align-items: center;
`;
