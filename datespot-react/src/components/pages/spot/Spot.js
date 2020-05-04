import React, { useContext, Fragment, useEffect } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardDeck, CardColumns } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import SpotItemHeader from "../../spot/SpotItemHeader";
import SpotFiltered from "../../spot/SpotFiltered";
import AuthContext from "../../../context/auth/AuthContext";
import { Spinner } from "react-bootstrap";
import "./Spot.css";

const Spot = () => {
  const authContext = useContext(AuthContext);
  const spotContext = useContext(SpotContext);
  const {
    spots,
    filtered,
    getSpots,
    filteredByTag,
    filterId,
    filterSpotsBasedOnLike,
  } = spotContext;
  const { user } = authContext;
  useEffect(() => {
    getSpots();
  }, []);

  const spotItemToDisplay = () => {
    if (filteredByTag !== null) {
      return filteredByTag.map((spot) => (
        <SpotItem
          key={spot.id}
          title={spot.title}
          location={spot.location}
          description={spot.description}
          ave_cost={spot.ave_cost}
          url={spot.url}
          latitude={spot.latitude}
          longitude={spot.longitude}
          avg_cost={spot.avg_cost}
          id={spot.id}
          summary={spot.summary}
          address={spot.address}
          dress={spot.dress}
          best_times={spot.best_times}
          advice={spot.advice}
        />
      ));
    } else if (filtered !== null) {
      return filtered.map((spot) => (
        <SpotItem
          key={spot.id}
          title={spot.title}
          location={spot.location}
          description={spot.description}
          ave_cost={spot.ave_cost}
          url={spot.url}
          latitude={spot.latitude}
          longitude={spot.longitude}
          avg_cost={spot.avg_cost}
          id={spot.id}
          summary={spot.summary}
          address={spot.address}
          dress={spot.dress}
          best_times={spot.best_times}
          advice={spot.advice}
        />
      ));
    } else {
      return spots.map((spot) => (
        <SpotItem
          key={spot.id}
          title={spot.title}
          location={spot.location}
          description={spot.description}
          ave_cost={spot.ave_cost}
          url={spot.url}
          latitude={spot.latitude}
          longitude={spot.longitude}
          avg_cost={spot.avg_cost}
          id={spot.id}
          summary={spot.summary}
          address={spot.address}
          dress={spot.dress}
          best_times={spot.best_times}
          advice={spot.advice}
        />
      ));
    }
  };

  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <SpotItemHeader />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SpotFiltered />
      </div>

      <div>
        {spots !== null ? (
          <CardColumns style={{ marginTop: "20px" }}>
            {spotItemToDisplay()}
          </CardColumns>
        ) : (
          <div className="text-center" style={{ marginTop: "300px" }}>
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Spot;
