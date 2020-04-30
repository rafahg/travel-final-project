import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const SpotDetails = (props) => {
  return (
    <Jumbotron fluid data-test="spot-details-container">
      <Container>
        <h1 data-test="text-container">{props.location.aboutProps.title}</h1>
        <p data-test="description-container">
          {props.location.aboutProps.description}
        </p>
      </Container>
    </Jumbotron>
  );
};

export default SpotDetails;
