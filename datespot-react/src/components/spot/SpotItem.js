import React, { useContext, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./css/SpotItem.css";
import { Link } from "react-router-dom";
import SpotContext from "../../context/spot/SpotContext";
import CardBody from "./CardBody";

const SpotItem = (props) => {
  const spotContext = useContext(SpotContext);
  const { clearFilter } = spotContext;

  return (
    <Card data-test="card-container" className="shadow">
      <Card.Img variant="top" src={props.url} />
      <CardBody title={props.title} summary={props.summary} id={props.id} />
      <Card.Footer class="spotFooter">
        <div className="spotButton">
          <Button variant="primary">
            <Link
              to={{
                pathname: "/spotdetails",
                aboutProps: {
                  title: props.title,
                  description: props.description,
                  url: props.url,
                  latitude: props.latitude,
                  longitude: props.longitude,
                  location: props.location,
                  avg_cost: props.avg_cost,
                  summary: props.summary,
                  address: props.address,
                  dress: props.dress,
                  best_times: props.best_times,
                  advice: props.advice,
                  id: props.id,
                },
              }}
              onClick={clearFilter}
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
