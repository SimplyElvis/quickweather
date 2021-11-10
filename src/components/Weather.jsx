import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Result from "./Result";
import Countries from "./Countries";

const StyledWeather = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  min-height: 90vh;
  display: grid;
  place-items: center;
  z-index: 5;
`;
function Weather() {
  return (
    <StyledWeather>
      <Search />
      <Result />
      <Countries />
    </StyledWeather>
  );
}

export default Weather;
