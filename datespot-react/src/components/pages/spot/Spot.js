import React, { useContext, Fragment, useEffect } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardDeck, CardColumns, Jumbotron, Container } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import SpotItemHeader from "../../spot/SpotItemHeader";
import SpotFiltered from "../../spot/SpotFiltered";
import AuthContext from "../../../context/auth/AuthContext";
import { Spinner } from "react-bootstrap";
import "./Spot.css";
import table from "../../../assets/images/table.jpg";

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
      if (filtered.length !== 0) {
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
        return <div>No Spots found. please try another search</div>;
      }
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
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${table})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "300px",
        }}
      >
        <Container>
          <div className="spotHeader">
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
            <SpotFiltered className="text-center" />
          </div>
        </Container>
      </Jumbotron>

      <Container>
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
      </Container>
    </div>
  );
};

export default Spot;
