import React from "react";
import { Card } from "react-bootstrap";

const UserAccountDetail = ({ user }) => {
  return (
    <div style={{ flexGrow: "1", width: "50%", margin: "5px" }}>
      <Card>
        <Card.Header style={{ backgroundColor: "floralwhite" }}>
          Your Account
        </Card.Header>
        <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Title>Username</Card.Title>
          <Card.Text>{user.username}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserAccountDetail;
