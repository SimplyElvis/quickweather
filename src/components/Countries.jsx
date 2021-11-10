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
  margin-top: 1em;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    place-items: center;
  }
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
