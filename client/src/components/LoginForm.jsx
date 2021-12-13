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
    //check if password / username match
      //if not, show alert: invalid username/password, please try again
    console.log(loginInfo);
  }

  return (
    <div>
      <Title> Login to your account </Title>
      <Form>
        <InputLabel label={"Username"} input={"username"} />
        <InputLabel label={"Password"} input={"password"} />
      </Form>
      <Submit handleCancel={toggleModal} />
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
