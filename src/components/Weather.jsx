import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import Result from "./Result";
// import Countries from "./Countries";
import DataContext from "../context/DataContext";

const StyledWeather = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  min-height: 84vh;
  display: grid;
  place-items: center;
  z-index: 5;

  @media (max-width: 768px) {
    min-height: 200vh;
  }
`;

function Weather() {
  const [city, setCity] = useState("");

  return (
    <StyledWeather>
      <DataContext.Provider value={{ city, setCity }}>
        <Search />
        <Result />
      </DataContext.Provider>
      {/* <Countries /> */}
    </StyledWeather>
  );
}

export default Weather;
