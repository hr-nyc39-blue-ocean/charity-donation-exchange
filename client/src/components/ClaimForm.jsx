import React from "react";
import styled from 'styled-components';
import Submit from '../shared/SubmitCancelButton.jsx';
import InputLabel from '../shared/InputLabel.jsx';

const ClaimForm = () => {

  return (
    <div>
      <Title> Please submit your info for the donator </Title>
      <Form>
        <InputLabel label={"Name"} input={"name"} />
        <InputLabel label={"Email"} input={"email"} />
        <InputLabel label={"Phone"} input={"phone"} />
      </Form>
      <Submit />
    </div>
  )
}

export default ClaimForm;

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

