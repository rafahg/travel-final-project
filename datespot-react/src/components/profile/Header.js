import React from "react";
import "./Header.css";
import table from "../../assets/images/table.jpg";
import {Jumbotron, Container,} from "react-bootstrap";

const Header = () => {
  return (
    // <div className="headline">
    //   <img style={{ width: "-webkit-fill-available" }} src={table} id="im" />
    // </div>
    <Jumbotron
        fluid
        className="shadow"
        style={{
          backgroundImage: `url(${table})`,
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
