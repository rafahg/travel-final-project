import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";
import AlertContext from "../../context/alert/AlertContext";
import { Spinner, Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fireworks from "../../assets/images/fireworks.jpg";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated, spinner } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({ user: { email, password } });
    }
  };

  return (

    <div className="container cont" style={{paddingTop: '30px'}}>
      <Row>
        <Col>
            <img src={fireworks} style={{ maxWidth: "100%" }} className="shadow"></img>
        </Col>
        <Col>
          <Form onSubmit={onSubmit} style={{ flexGrow: "1" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </Form.Group>
            <div className="spotButton">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <p className="text-center">
              Never Signed up? Let's
              <Link to="/register"> Sign you up!</Link>
            </p>
          </Form>
        </Col>
      </Row>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        {spinner && <Spinner animation="border" variant="danger" />}
      </div>
    </div>
  );
};

export default Login;
