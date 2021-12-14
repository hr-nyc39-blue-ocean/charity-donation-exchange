import React from "react";
import styled from "styled-components";
import Submit from "../shared/SubmitCancelButton.jsx";
import InputLabel from "../shared/InputLabel.jsx";
import { useState, useEffect } from "react";
const api = require('../../api/index.js');


const NewListingForm = ({ userId, toggleModal, fetchUserDonations }) => {

  const defaultListing = {
    name: '',
    category: '',
    zipcode: '',
    photoURL: '',
    charityOnly: false,
    userID: userId,
    quantity: 0
  }
  const [listingInfo, setListingInfo] = useState(defaultListing)

  const handleCheckboxSelected = (e) => {
    if (e.target.name === "yes" && e.target.checked === true) {
      setListingInfo((prevState) => (
        {...prevState, charityOnly: true }
        ))
    }
  }

  const handleInputChange = (e) => {
    setListingInfo((prevState) => (
      {...prevState, [e.target.name]: e.target.value }
      ))
  }

  const handleSubmit = (listingInfo) => {
    const { name, category, zipcode, photoURL, charityOnly, userID, quantity } = listingInfo;
    api.createDonationListing( { name, category, zipcode, photoURL, charityOnly, userID, quantity } )
    .then((results) => {
      fetchUserDonations()
      toggleModal()
      console.log('results in NewListingForm handleSubmit: ', results)
    })
    .catch((err) => {
      console.log('ERROR IN NewListingForm submit: ', err);
    })
  }


  return (
    <div>
      <Title>Create a new listing</Title>
      <Form onChange={handleInputChange}>
        <InputLabel label={"Item Name"} input={"name"} />
        <InputLabel label={"Category"} input={"category"} />
        <InputLabel label={"Zipcode"} input={"zipcode"} />
        <InputLabel label={"Photo URL"} input={"photoURL"} />
        <InputLabel label={"Quantity"} input={"quantity"} />
        <CheckboxLabel>Charity Only:
          <ChoiceLabel > Yes <CheckMark type="checkbox" name="yes" onClick={handleCheckboxSelected}/> </ChoiceLabel>
          <ChoiceLabel> No <CheckMark type="checkbox" name="no" onClick={handleCheckboxSelected} /> </ChoiceLabel>
        </CheckboxLabel>
      </Form>
      <Submit handleSubmit={() => {handleSubmit(listingInfo)}} handleCancel={toggleModal}/>
    </div>
  );
};

export default NewListingForm;

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

const CheckboxLabel = styled.label`
  width: 40vw;
  display: flex;
  margin-top: 10px;
  //border: solid;
  //align-items: center;
`;

const ChoiceLabel = styled.label`
  margin-left: 10%;
`;

const CheckMark = styled.input`
  height: 17px;
  width: 17px;
`;
