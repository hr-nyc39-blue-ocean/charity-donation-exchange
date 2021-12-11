import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import ClaimForm from '../components/ClaimForm.jsx';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';
import NewListingForm from '../components/NewListingForm.jsx';

const Modal = ({ claim, login, signup }) => {

  return (
    <div>
      <Background>
        <ModalWrapper>
          { claim && <ClaimForm /> }
          { login && <LoginForm /> }
          { signup && <SignupForm /> }
          {/* <SignupForm /> */}
          {/* <LoginForm /> */}
          {/* <ClaimForm /> */}
          <NewListingForm />
        </ModalWrapper>
      </Background>

    </div>
  )
}

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  // background: rgba(200, 200, 200, 0.5);
  background: #FFF9EA;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999
`;

const ModalWrapper = styled.div`
  width: 70%;
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