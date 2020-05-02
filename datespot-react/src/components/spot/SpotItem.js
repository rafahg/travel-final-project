import React from "react";
import { Card, Button } from "react-bootstrap";
import "./css/SpotItem.css";
import littlevenice from "../../assets/images/littlevenice.jpeg";
import { Link } from "react-router-dom";

const SpotItem = ({ title, description, url, longitude, latitude, location, avg_cost }) => {
  return (
    <Card data-test="card-container">
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title data-test="text-container">{title}</Card.Title>
        <Card.Text data-test="description-container">{description}</Card.Text> 
      </Card.Body>
      <Card.Footer class="spotFooter">
        <div className="spotButton">
            <Button variant="primary">
              <Link
                to={{
                  pathname: "/spotdetails",
                  aboutProps: {
                    title: title,
                    description: description,
                    url: url,
                    latitude: latitude,
                    longitude: longitude,
                    location: location,
                    avg_cost: avg_cost
                  },
                }}
                className="link"
              >
                More information
              </Link>
            </Button>
          </div>
      </Card.Footer>
    </Card>
  );
};

export default SpotItem;
