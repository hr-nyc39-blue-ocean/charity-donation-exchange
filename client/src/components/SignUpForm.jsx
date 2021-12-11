import React from "react";
import styled from "styled-components";
import Submit from "../shared/SubmitCancelButton.jsx";
import InputLabel from "../shared/InputLabel.jsx";

const SignUpForm = ({ toggleModal }) => {
  return (
    <div>
      <Title> Create your account </Title>
      <Form>
        <InputLabel label={"Username"} input={"username"} />
        <InputLabel label={"Password"} input={"password"} />
        <InputLabel label={"Name"} input={"name"} />
        <InputLabel label={"Email"} input={"email"} />
        <InputLabel label={"Phone"} input={"phone"} />
        <p style={{ color: "grey" }}>
          To protect your privacy, your name, email, and phone number will not
          be publicly shown
        </p>
      </Form>
      <Submit handleCancel={toggleModal} />
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
