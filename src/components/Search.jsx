import React, { useState, useContext } from "react";
import styled from "styled-components";
import DataContext from "../context/DataContext";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background-color: var(--color);
  border-radius: 5px;
  margin: 1em;
`;

function Search() {
  const [search, setSearch] = useState("");
  const { setCity } = useContext(DataContext);

  function submitSearch(event) {
    event.preventDefault();
    // send city/location name.
    setCity(search);
  }

  return (
    <StyledSearch>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Enter location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
    </StyledSearch>
  );
}

export default Search;
