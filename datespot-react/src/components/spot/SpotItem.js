import React from "react";
import { Card, Button } from "react-bootstrap";
import "./SpotItem.css";
import littlevenice from "../../assets/images/littlevenice.jpeg";
import { Link } from "react-router-dom";

const SpotItem = ({ title, description, image, lat, lon }) => {
  return (
    <Card data-test="card-container">
      <Card.Img variant="top" src={littlevenice} />
      <Card.Body>
        <Card.Title data-test="text-container">{title}</Card.Title>
        <Card.Text data-test="description-container">{description}</Card.Text>
        <div className="spotButton">
          <Button variant="primary">
            <Link
              to={{
                pathname: "/spotdetails",
                aboutProps: {
                  title: title,
                  description: description,
                  image: image,
                  lat: lat,
                  lon: lon,
                },
              }}
              className="link"
            >
              More information
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SpotItem;
