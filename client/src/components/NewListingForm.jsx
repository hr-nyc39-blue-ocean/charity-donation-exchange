import React from "react";
import styled from 'styled-components';
import Submit from '../shared/SubmitCancelButton.jsx';
import InputLabel from '../shared/InputLabel.jsx';


const NewListingForm = () => {
  return (
    <div>
      <Title>Create a new listing</Title>
      <Form>
        <InputLabel label={"Item Name"} input={"item"} />
        <InputLabel label={"Category"} input={"category"} />
        <InputLabel label={"Location"} input={"location"} />
        <InputLabel label={"Photo URL"} input={"photo"} />
        <CheckboxLabel>Charity Only:
          <ChoiceLabel > Yes <CheckMark type="checkbox" /> </ChoiceLabel>
          <ChoiceLabel> No <CheckMark type="checkbox" /> </ChoiceLabel>
        </CheckboxLabel>
      </Form>
      <Submit />
    </div>
  )
}

export default NewListingForm;

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

const CheckboxLabel = styled.label`
  width: 40vw;
  display: flex;
  margin-top: 10px;
  //border: solid;
  //align-items: center;
`

const ChoiceLabel = styled.label`
  margin-left: 10%;
`

const CheckMark = styled.input`
  height: 17px;
  width: 17px;
`