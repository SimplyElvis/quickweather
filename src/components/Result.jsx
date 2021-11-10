import React from "react";
import styled from "styled-components";

const StyledResult = styled.section`
  height: 200px;
  width: 200px;
  background-color: var(--color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Result = () => {
  return <StyledResult>Result</StyledResult>;
};

export default Result;
