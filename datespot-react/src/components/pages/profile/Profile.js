import React, { Fragment, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import Header from "../../profile/Header";
import AuthContext from "../../../context/auth/AuthContext";
import SpotContext from "../../../context/spot/SpotContext";
import { Spinner } from "react-bootstrap";
import SpotItemHeartless from "../../spot/SpotItemHeartless";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { filterSpotsBasedOnLike, filteredByLiked } = useContext(SpotContext);

  useEffect(() => {
    filterSpotsBasedOnLike(user);
  }, []);

  return (
    <div className="container cont">
    <Fragment>
      <Header />
      <div style={{ marginTop: "30px", display: "flex", flexDirection: "row" }}>
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
        <div xs={6} md={6} id="likedContainer">
          <h5 style={{ textAlign: "center" }}>You liked the following Spots</h5>
          {/**this is where we display the cards which the user liked */}
          {filteredByLiked !== null ? (
            filteredByLiked.map((spot) => (
              <SpotItemHeartless
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
            ))
          ) : (
            <Spinner animation="border" variant="danger" />
          )}
        </div>
      </div>
    </Fragment>
    </div>
  );
};

export default Profile;
