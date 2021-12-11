import React from "react";
import styled from 'styled-components';
import Submit from '../shared/SubmitCancelButton.jsx';
import InputLabel from '../shared/InputLabel.jsx';

const LoginForm = () => {


  return (
    <div>
      <Title> Login to your account </Title>
      <Form>
        <InputLabel label={"Username"} input={"username"}/>
        <InputLabel label={"Password"} input={"password"}/>
      </Form>
      <Submit/>
    </div>
  )
}

export default LoginForm;

const Title = styled.h3`
  text-align: center;
  //margin-top: 20px;
`

const Form = styled.div`
  height: 50vh;
  width: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

