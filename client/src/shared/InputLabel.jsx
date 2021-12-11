import React from "react";
import styled from 'styled-components';

const InputLabel = ({ label, input }) => {
  return (
    <div>
    <Label> {label}: <Input type="text" name={input}/> </Label>
    </div>
  )
}

export default InputLabel;

const Label = styled.label`
  width: 35vw;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  //border: solid;
`

const Input = styled.input`
  margin-left: 20px;
  width: 70%;
`

