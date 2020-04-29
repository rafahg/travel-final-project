import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const SpotDetails = (props) => {
    console.log(props.location.aboutProps);
    return(
        <Jumbotron fluid>
            <Container>
                <h1>{props.location.aboutProps.title}</h1>
                <p>
                {props.location.aboutProps.description}
                </p>
            </Container>
        </Jumbotron>
    )
};

export default SpotDetails;