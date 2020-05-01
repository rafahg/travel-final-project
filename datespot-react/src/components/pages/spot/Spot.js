import React, { useContext, Fragment, useEffect } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardColumns } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import SpotItemHeader from "../../spot/SpotItemHeader";
import SpotFiltered from "../../spot/SpotFiltered";
import "./Spot.css";

const Spot = () => {
  const spotContext = useContext(SpotContext);
  const { spots, filtered, getSpots } = spotContext;

  useEffect(() => {
    getSpots();
  }, []);

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

      <div>
        {spots !== null ? (
          <CardColumns style={{ marginTop: "20px" }}>
            {filtered !== null
              ? filtered.map((spot) => (
                  <SpotItem
                    key={spot.id}
                    title={spot.title}
                    location={spot.location}
                    description={spot.description}
                    ave_cost={spot.ave_cost}
                    url={spot.url}
                    latitude={spot.latitude}
                    longitude={spot.longitude}
                  />
                ))
              : spots.map((spot) => (
                  <SpotItem
                    key={spot.id}
                    title={spot.title}
                    location={spot.location}
                    description={spot.description}
                    ave_cost={spot.ave_cost}
                    url={spot.url}
                    latitude={spot.latitude}
                    longitude={spot.longitude}
                  />
                ))}
          </CardColumns>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </Fragment>
  );
};

export default Spot;
