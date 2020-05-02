import React, { Fragment } from "react";
import SpotMap from "./SpotMap.js"
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import "./css/SpotDetails.css";



const SpotDetails = (props) => {

    console.log(1, props.location.aboutProps);
    return(
       <Fragment class="spotJumbo">
            <Jumbotron fluid style={{
                backgroundImage: `url(${props.location.aboutProps.url})`, 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                height: '350px'
                
                }}>
                <Container>
                    <h1><span>{props.location.aboutProps.title}</span></h1>
                    <h3><span>
                    {props.location.aboutProps.location}
                    </span></h3>
                </Container>
            </Jumbotron>
        
        <Container>
            <Row>
                <Col>
                <p><FontAwesomeIcon icon={faUserTie} /> : Smart</p>
                <p><FontAwesomeIcon icon={faMoneyBillWave} />: £{props.location.aboutProps.avg_cost}</p>
                <p>{props.location.aboutProps.description}</p>
                </Col>
                <Col>
                    <SpotMap longitude = {props.location.aboutProps.longitude} 
            latitude ={props.location.aboutProps.latitude} ></SpotMap>
                </Col>
            </Row>
        </Container>
        </Fragment>
    );
};



export default SpotDetails;
