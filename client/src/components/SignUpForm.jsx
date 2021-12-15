import React from "react";
import styled from "styled-components";
import Submit from "../shared/SubmitCancelButton.jsx";
import InputLabel from "../shared/InputLabel.jsx";
import { useState, useEffect } from "react";
const api = require("../../api/index.js");

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
        setResponse(results.data);
      })
      .catch((err) => {
        setResponse("username or email already exists!");
      });
  };

  return (
    <div>
      <Title> Create your account </Title>
      <Form onChange={handleInputChange}>
        <InputLabel label={"Username"} input={"username"} />
        <InputLabel label={"Password"} input={"password"} />
        <InputLabel label={"Name"} input={"name"} />
        <InputLabel label={"Email"} input={"email"} type={"email"} />
        <InputLabel label={"Phone"} input={"phone"} />
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
