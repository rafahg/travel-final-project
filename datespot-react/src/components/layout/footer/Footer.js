import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";



import "./Footer.css";

export const Footer = () => {
  
  return (
    <div className="footer">
    <Container>
      <Row>
          <Col><small>&copy; DateSpot</small></Col>
      </Row>
    </Container>
    </div>
  );
};

export default Footer;
