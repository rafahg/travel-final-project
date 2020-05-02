import React from "react";
import SpotMap from "./SpotMap.js"
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./css/SpotDetails.css";



const SpotDetails = (props) => {

    console.log(1, props.location.aboutProps);
    return(
       <Container class="spotJumbo">
            <Jumbotron fluid  style={{
                backgroundImage: `url(${props.location.aboutProps.url})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                }}>
                <Container>
                    <h1><span>{props.location.aboutProps.title}</span></h1>
                    <h3><span>
                    {props.location.aboutProps.location}
                    </span></h3>
                </Container>
            </Jumbotron>
            <Row>
                <Col>
                <p>{props.location.aboutProps.description}</p>
                </Col>
                <Col>
                    <SpotMap longitude = {props.location.aboutProps.longitude} 
            latitude ={props.location.aboutProps.latitude} ></SpotMap>
                </Col>
            </Row>
            
        </Container>
    );
};



export default SpotDetails;
