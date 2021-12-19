import React from "react";
import styled from "styled-components";
import ClaimForm from "../components/ClaimForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import SignUpForm from "../components/SignUpForm.jsx";
import NewListingForm from "../components/NewListingForm.jsx";
import InitialForm from "../components/InitialForm.jsx";

const Modal = ({
  setNewestView,
  setUsername,
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
  fetchUserDonations,
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
              setNewestView={setNewestView}
              setSeeAllListings={setSeeAllListings}
              setUsername={setUsername}
              setIsLoggedIn={setIsLoggedIn}
              setUserId={setUserId}
              toggleModal={toggleModal}
            />
          )}
          {signupModal && <SignUpForm toggleModal={toggleModal} />}
          {newListingModal && (
            <NewListingForm
              userId={userId}
              toggleModal={toggleModal}
              fetchUserDonations={fetchUserDonations}
            />
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
  background: rgba(200, 200, 200, 0.5);
  //background: white;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9998;
`;

const ModalWrapper = styled.div`
  width: 60%;
  height: 70%;
  border-radius: 12px;
  background-color: #fff9ea;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  z-index: 9999;
  //justify-content: center;
  //align-items: center;
`;
