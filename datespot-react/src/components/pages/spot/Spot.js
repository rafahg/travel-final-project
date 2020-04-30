import React, { useContext, Fragment } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardColumns } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import SpotItemHeader from "../../spot/SpotItemHeader";
import SpotFiltered from "../../spot/SpotFiltered";
import "./Spot.css";

const Spot = () => {
  const spotContext = useContext(SpotContext);

  const { spots, filtered } = spotContext;

  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <SpotItemHeader />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SpotFiltered />
      </div>

      <CardColumns style={{ marginTop: "20px" }}>
        {filtered !== null
          ? filtered.map((spot) => (
              <SpotItem
                key={spot.id}
                title={spot.title}
                description={spot.description}
                image={spot.image}
                lat={spot.lat}
                lon={spot.lon}
              />
            ))
          : spots.map((spot) => (
              <SpotItem
                key={spot.id}
                title={spot.title}
                description={spot.description}
                image={spot.image}
                lat={spot.lat}
                lon={spot.lon}
              />
            ))}
      </CardColumns>
    </Fragment>
  );
};

export default Spot;
