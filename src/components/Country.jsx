import React from "react";
import styled from "styled-components";

const StyledCountry = styled.div`
  min-width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: blue;
  padding: 0.6em;
  margin: 0 0.5em;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
function Country() {
  return (
    <StyledCountry>
      <p>Temp</p>
      <div>
        <p>City</p>
        <p>desc</p>
        <p>icon</p>
      </div>
    </StyledCountry>
  );
}

export default Country;
