import React from "react";
import styled from 'styled-components';
import Submit from '../shared/SubmitCancelButton.jsx';
import InputLabel from '../shared/InputLabel.jsx';
import { useState, useEffect } from "react";
const api = require('../../api/index.js');


const SignUpForm = ({ toggleModal }) => {

  const initialSignupInfo = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  }

  const [signupInfo, setSignupInfo] = useState(initialSignupInfo)
  const [username, setUsername] = useState(false);

  useEffect(() => {setUsername(false)},[signupInfo]);

  const handleInputChange = (e) => {
    setSignupInfo((prevState) => (
      {...prevState, [e.target.name]: e.target.value }
      ))
  }

  const handleSubmit = (signupInfo) => {

    for (let key in signupInfo) {
      if (signupInfo[key] === '') {
        alert('Please fill out all fields before submit')
        return;
      }
    }
    //console.log("🚀 ~ file: SignUpForm.jsx ~ line 33 ~ handleSubmit ~ signupInfo", signupInfo)
    api.signupUser(signupInfo)
    .then((results) => {
      if (results.data === "user already exists") {
        //console.log("🚀 ~ file: SignUpForm.jsx ~ line 35 ~ .then ~ results.data", results.data)
        setUsername(true);
        toggleModal()
      } else {
        alert('Please login to your new account')
      }
    })
    .catch((err) => {
      console.log('ERROR IN SignUpForm handleSubmit function: ', err)
    })
  }

  return (
    <div>
      <Title> Create your account </Title>
      <Form onChange={handleInputChange}>
        <InputLabel label={"Username"} input={"username"}/>
        {username && <UsernameExists>Username already exists, please try another one</UsernameExists>}
        <InputLabel label={"Password"} input={"password"}/>
        <InputLabel label={"Name"} input={"name"}/>
        <InputLabel label={"Email"} input={"email"} type={"email"}/>
        <InputLabel label={"Phone"} input={"phone"}/>
        <Note>To protect your privacy, your name, email, and phone number will not be publicly shown</Note>
      </Form>
      <Submit handleSubmit={() => {handleSubmit(signupInfo)}} handleCancel={toggleModal} />
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
`

const UsernameExists = styled.p`
  color: red;
  font-size: 15px;
  margin-left:
`
