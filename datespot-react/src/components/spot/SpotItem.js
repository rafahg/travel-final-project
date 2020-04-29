import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./SpotItem.css";

const SpotItem = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col sm={5} className="spotContainer">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "162px",
              }}
            >
              something else
            </div>
            <div>{title}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SpotItem;
