import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background-color: var(--color);
  border-radius: 5px;
`;

function Search() {
  return (
    <StyledSearch>
      <form action="" method="post">
        <input type="text" placeholder="Enter location" />
        <button type="submit">search</button>
      </form>
    </StyledSearch>
  );
}

export default Search;
