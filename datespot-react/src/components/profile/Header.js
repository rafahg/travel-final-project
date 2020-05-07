import React from "react";
import "./Header.css";
import sitting from "../../assets/images/sitting.jpg";
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron
      fluid
      className="shadow"
      style={{
        backgroundImage: `url(${sitting})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "375px",
      }}
    >
      <Container>
        <div className="spotHeader">
          <h1>
            <span>Profile</span>
          </h1>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Header;
