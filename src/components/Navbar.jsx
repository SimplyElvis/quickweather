import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 1em;
  background-color: var(--color);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 700;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <span>quick.weather</span>
      <div>navicon</div>
    </StyledNav>
  );
}

export default Navbar;
