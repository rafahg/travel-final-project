import React, { Fragment, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../profile/Header";
import AuthContext from "../../../context/auth/AuthContext";
import SpotContext from "../../../context/spot/SpotContext";
import { Spinner } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { filterSpotsBasedOnLike, filteredByLiked } = useContext(SpotContext);

  useEffect(() => {
    filterSpotsBasedOnLike(user);
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col xs={6} md={6} style={{ border: "1px solid black" }}>
            {/**this is where we display the cards which the user liked */}
            {filteredByLiked !== null ? (
              filteredByLiked.map((spot) => (
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
                />
              ))
            ) : (
              <Spinner animation="border" variant="danger" />
            )}
          </Col>
          <Col xs={6} md={6} style={{ border: "1px solid black" }}>
            {/* this is where we display the comments which the user commented on */}
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
