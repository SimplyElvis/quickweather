import React from "react";
import styled from "styled-components";

const StyledCountry = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: blue;
  padding: 0.6em;
  margin: 0 0.5em;
`;
function Country() {
  return <StyledCountry>Country Data</StyledCountry>;
}

export default Country;
