import React from "react";
import styled from 'styled-components';

const Submit = ({ handleSubmit, handleCancel }) => {
  return (
    <div>
      <ButtonContainer>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
    </ButtonContainer>
    </div>
  )
}


const ButtonContainer = styled.div`
  height: 10%;
  width: 100%;
  //border: 1px solid red;
  display: flex;
  justify-content: space-around;
`

  const SubmitButton = styled.button`
  height: 70%;
  width: 20%;
`
  const CancelButton = styled.button`
  height: 70%;
  width: 20%;
`

export default Submit;