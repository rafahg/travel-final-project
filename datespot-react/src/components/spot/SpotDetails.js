import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const SpotDetails = (props) => {
  return (
    <Jumbotron fluid data-test="spot-details-container">
      <Container>
        <h1>{props.location.aboutProps.title}</h1>
        <p>{props.location.aboutProps.description}</p>
      </Container>
    </Jumbotron>
  );
};

export default SpotDetails;
