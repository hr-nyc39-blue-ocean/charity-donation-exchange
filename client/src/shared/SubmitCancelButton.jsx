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
  height: 5vh;
  width: 100%;
  //border: 1px solid red;
  display: flex;
  justify-content: space-around;
`

  const SubmitButton = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  background-color: white;
  border: 1px solid grey;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #fff9ea;
  }
`
  const CancelButton = styled(SubmitButton)`
`

export default Submit;