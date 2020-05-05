import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../../assets/images/logo.png";

const Home = () => {
  return (
    <div className="bg">
      <div className="v-centre">
        <Row className="align-middle">
          <Col>
            <div className="welcome">
              <img src={logo} />
              <Row>
                <Col>
                  <div className="homeButton">
                    <Button>
                      <Link to="/login" className="link">
                        Sign in
                      </Link>
                    </Button>{" "}
                    &nbsp; &nbsp;{" "}
                    <Button>
                      <Link to="/register" className="link">
                        Sign up
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
