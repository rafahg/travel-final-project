import React from "react";
import { Card } from "react-bootstrap";
import "./SpotItem.css";

const SpotItem = ({ title, description }) => {
  return (

    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
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
