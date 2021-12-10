import React from "react";
import styled from 'styled-components';

const ClaimForm = () => {



  return (
    <div>
      <Title> Please submit your info for the donator </Title>
      <Form>
        <Label> Name:
        <Input type="text" name="name" /> </Label> <br></br>
        <Label> Phone:
        <Input type="text" name="phone" /> </Label> <br></br>
        <Label> Email:
        <Input type="text" name="email" />  </Label> <br></br>
      </Form>
      <ButtonContainer>
        <Submit> Submit </Submit>
        <Cancel> Cancel </Cancel>
      </ButtonContainer>
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
const Label = styled.label`
  width: 50%;
  //border: solid;
`

const Input = styled.input`
  margin-left: 20px;
  width: 70%;
`

const ButtonContainer = styled.div`
  height: 10%;
  width: 100%;
  //border: 1px solid red;
  display: flex;
  justify-content: space-around;
`

const Submit = styled.button`
  height: 70%;
  width: 20%;
`
const Cancel = styled.button`
  height: 70%;
  width: 20%;
`