import React, { useState } from "react";
import styled from "styled-components";
import Button from "../shared/Button.jsx";

const InitialForm = ({ toggleModal, setSeeAllListings }) => {
  const [firstPage, setFirstPage] = useState(true);
  return (
    <div>
      <div>
        <Title> Hello! </Title>
        <Container>
          <TitleStyled>Are you:</TitleStyled>
          {firstPage ? (
            <div>
              <ButtonStyled>
                <Button
                  className="initial-form-button"
                  handleOnClick={() => {
                    setSeeAllListings(true);
                    toggleModal();
                  }}
                  text="A Donor"
                />
              </ButtonStyled>
              <ButtonStyled>
                <Button
                  className="initial-form-button"
                  handleOnClick={() => {
                    setFirstPage(false);
                  }}
                  text="Looking for Donations"
                />
              </ButtonStyled>
            </div>
          ) : (
            <div>
              <ButtonStyled>
                <Button
                  className="initial-form-button"
                  handleOnClick={() => {
                    setSeeAllListings(true);
                    toggleModal();
                  }}
                  text="A Charity Foundation"
                />
              </ButtonStyled>
              <ButtonStyled>
                <Button
                  className="initial-form-button"
                  handleOnClick={() => {
                    setSeeAllListings(false);
                    toggleModal();
                  }}
                  text="Non charity affiliated"
                />
              </ButtonStyled>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default InitialForm;

const Title = styled.h3`
  text-align: center;
  font-size: 36pt;
`;

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleStyled = styled.div`
  padding: 30px;
`;

const ButtonStyled = styled.div`
  padding: 10px;
`;
