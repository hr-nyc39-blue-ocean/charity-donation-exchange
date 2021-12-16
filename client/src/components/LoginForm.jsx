import React from "react";
import styled from "styled-components";
import Submit from "../shared/SubmitCancelButton.jsx";
import InputLabel from "../shared/InputLabel.jsx";
import { useState, useEffect } from "react";
const api = require("../../api/index.js");

const LoginForm = ({
  setNewestView,
  setUsername,
  setIsLoggedIn,
  setUserId,
  toggleModal,
  setSeeAllListings,
}) => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setLoginInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setUsername(loginInfo.username);
  };

  const handleSubmit = (loginInfo) => {
    for (let key in loginInfo) {
      if (loginInfo[key] === "") {
        alert("Please fill out all fields before submit");
        return;
      }
    }
    api
      .loginUser(loginInfo)
      .then((results) => {

        setUserId(results.data.userID);
        setIsLoggedIn(true);
        setSeeAllListings(true);

        toggleModal();
      })
      .catch((err) => {
        setResponse("Incorrect username/password, Please try again!");
        console.log("ERROR IN LoginForm handleSubmit: ", err);
      });
  };

  return (
    <div>
      <Title> Login to your account </Title>
      <Form onChange={handleInputChange}>

        <InputLabel label={"Username"} input={"username"} />
        <InputLabel label={"Password"} input={"password"} type={"password"}/>
        {response && <Response>{response}</Response>}

      </Form>
      <Submit
        handleCancel={toggleModal}
        handleSubmit={() => {
          handleSubmit(loginInfo);
        }}
      />
    </div>
  );
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

const Response = styled.div`
  color: red;
  margin-top: 15px;
`;
