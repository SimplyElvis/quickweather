import React from "react";
import styled from "styled-components";
import Country from "./Country";

const StyledCountries = styled.footer`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-evenly;
  background-color: var(--color);
  width: 100%;
  padding: 1em 0;
`;

function Countries() {
  return (
    <StyledCountries>
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </StyledCountries>
  );
}

export default Countries;
