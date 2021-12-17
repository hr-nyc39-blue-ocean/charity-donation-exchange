import React from "react";
import styled from "styled-components";
import Submit from "../shared/SubmitCancelButton.jsx";
import InputLabel from "../shared/InputLabel.jsx";
import { useState, useEffect } from "react";
const api = require("../../api/index.js");

import { GoogleLogin } from "react-google-login";

const SignUpForm = ({ toggleModal }) => {
  const initialSignupInfo = {
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
  };

  const [signupInfo, setSignupInfo] = useState(initialSignupInfo);
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setSignupInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (signupInfo) => {
    for (let key in signupInfo) {
      if (signupInfo[key] === "") {
        alert("Please fill out all fields before submit");
        return;
      }
    }
    api
      .signupUser(signupInfo)

      .then((results) => {
        console.log("results sent back", results);
        if (results.data === "User already exists!") {
          alert("Username or email already exists! Please try again!");
        } else {
          alert("Account successfully created! Please log in");
        }
        // setResponse(results.data);
        toggleModal();
      })
      .catch((err) => {
        console.log("ERROR IN handleSubmit SignUpForm!");
      });
  };

  //GAuth
  const onSuccess = (response) => {
    console.log("signuponcussess", response);
    let resbody = response.profileObj;
    let name = resbody.givenName + " " + resbody.familyName;
    let email = resbody.email;
    let password = response.googleId.substring(2, 8);
    let phone = "0000000000";
    let username =
      resbody.givenName.substring(0, 3) + resbody.googleId.substring(0, 3);
    let gsignup = {
      name,
      username,
      email,
      password,
      phone,
    };
    api
      .signupUser(gsignup)
      .then((results) => {
        alert("Account successfully created! Please log in");
        // setResponse(results.data);
        toggleModal();
      })
      .catch((err) => {
        setResponse("username or email already exists!");
      });
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <Title> Create your account </Title>
      <Form onChange={handleInputChange}>
        <InputLabel label={"Username"} input={"username"} type={"text"} />
        <InputLabel label={"Password"} input={"password"} type={"password"} />
        <InputLabel label={"Name"} input={"name"} type={"text"} />
        <InputLabel label={"Email"} input={"email"} type={"email"} />
        <InputLabel label={"Phone"} input={"phone"} type={"text"} />
        <Note>
          To protect your privacy, your name, email, and phone number will not
          be publicly shown
        </Note>
        {response && <Response>{response}</Response>}
      </Form>
      <Submit
        handleSubmit={() => {
          handleSubmit(signupInfo);
        }}
        handleCancel={toggleModal}
      />
      <GoogleLogin
        clientId="494742389689-0plkkqgkr8897u3prt1qnj200tdhv4ik.apps.googleusercontent.com"
        buttonText="Signup"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default SignUpForm;

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

const Note = styled.p`
  color: grey;
  margin-top: 15px;
`;

const UsernameExists = styled.p`
  color: red;
  font-size: 15px;
  margin-left: ;
`;

const Response = styled.div`
  color: red;
  margin-top: 15px;
`;
