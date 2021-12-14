import React from "react";
import styled from 'styled-components';
import Submit from '../shared/SubmitCancelButton.jsx';
import InputLabel from '../shared/InputLabel.jsx';
import { useState, useEffect } from "react";
const api = require('../../api/index.js');

const LoginForm = ({ setIsLoggedIn, setUserId, toggleModal }) => {

  const [loginInfo, setLoginInfo] = useState({username: '', password: ''})

  const handleInputChange = (e) => {
    setLoginInfo((prevState) => (
      {...prevState, [e.target.name]: e.target.value }
      ))
  }

  const handleSubmit = (loginInfo) => {
    api.loginUser(loginInfo)
    .then((results) => {
      //check if valid, if not, alert
      if (results.data === "login failed") {
        alert("login failed");
      }
      setUserId(results.data[0].userID)
      toggleModal()
      //console.log("🚀 ~ file: LoginForm.jsx ~ line 23 ~ .then ~ results.data[0].userID", results.data[0].userID)
      //console.log("🚀 ~ file: LoginForm.jsx ~ line 21 ~ .then ~ results", results)

    })
    .catch((err) => {
      console.log('ERROR IN LoginForm handleSubmit: ', err);
    })
  }

  return (
    <div>
      <Title> Login to your account </Title>
      <Form onChange={handleInputChange}>
        <InputLabel label={"Username"} input={"username"} />
        <InputLabel label={"Password"} input={"password"} />
      </Form>
      <Submit handleCancel={toggleModal} handleSubmit={() => { handleSubmit(loginInfo) }} />
    </div>
  )
};

export default LoginForm;

const Title = styled.h3`
  text-align: center;
  //margin-top: 20px;
`;

const Form = styled.div`
  height: 50vh;
  width: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
