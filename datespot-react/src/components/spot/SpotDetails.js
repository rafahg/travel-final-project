import React from "react";
import SpotMap from "./SpotMap.js"
import { Jumbotron, Container } from "react-bootstrap";



const SpotDetails = (props) => {

    console.log(1, props.location.aboutProps);
    return(
       <Container>
            <Jumbotron fluid style={{
                backgroundImage: `url(${props.location.aboutProps.url})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <Container>
                    <h1>{props.location.aboutProps.title}</h1>
                    <p>
                    {props.location.aboutProps.description}
                    </p>
                </Container>
            </Jumbotron>
            <SpotMap longitude = {props.location.aboutProps.longitude} 
            latitude ={props.location.aboutProps.latitude} ></SpotMap>
        </Container>
    );
};



export default SpotDetails;
