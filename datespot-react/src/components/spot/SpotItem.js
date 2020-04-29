import React from "react";
import { Card, Button } from "react-bootstrap";
import "./SpotItem.css";
import littlevenice from "../../assets/images/littlevenice.jpeg"
import { Link } from "react-router-dom";

const SpotItem = ({ title, description, image }) => {
  return (

    <Card>
      <Card.Img variant="top" src={littlevenice }/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        
            <Button variant="primary"><Link to={{
          pathname: '/spotdetails',
          aboutProps: {title: title, description: description, image: image}
        }}  className="link">More information</Link></Button>
       
        
      </Card.Body>
    </Card>


    // <Container>
    //   <Row>
    //     <Col sm={5} className="spotContainer">
    //       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    //         <div
    //           style={{
    //             border: "1px solid black",
    //             width: "200px",
    //             height: "162px",
    //           }}
    //         >
    //           something else
    //         </div>
    //         <div>{title}</div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default SpotItem;
