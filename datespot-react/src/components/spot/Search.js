import React from "react";
import { Container } from "react-bootstrap";
import SpotItemHeader from "./SpotItemHeader";
import SpotFiltered from "./SpotFiltered";
import SpotTags from "./SpotTags";
import "./css/Search.css";

const Search = () => {
  return (
    <Container>
      <SpotItemHeader />
      <div className="filterContainer">
        <SpotFiltered className="text-center" />
        <SpotTags />
      </div>
    </Container>
  );
};

export default Search;
