import React, { Fragment, useContext, useEffect } from "react";
import Header from "../../profile/Header";
import AuthContext from "../../../context/auth/AuthContext";
import SpotContext from "../../../context/spot/SpotContext";
import SpotItemHeartless from "../../spot/SpotItemHeartless";
import UserAccountDetail from "./UserAccountDetail";

import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { filterSpotsBasedOnLike, filteredByLiked } = useContext(SpotContext);

  useEffect(() => {
    filterSpotsBasedOnLike(user);
  }, []);

  const SpotsLiked = () => {
    return filteredByLiked == null ? (
      <h5 style={{ textAlign: "center" }}>
        Spots you liked will appear here :)
      </h5>
    ) : (
      <h5 style={{ textAlign: "center" }}>You liked the following Spots:</h5>
    );
  };

  return (
    <div>
      <Header />
      <div className="container cont">
        <Fragment>
          <div
            style={{ marginTop: "30px", display: "flex", flexDirection: "row" }}
          >
            <UserAccountDetail user={user} />
            <div xs={6} md={6} id="likedContainer">
              {SpotsLiked()}
              {/**this is where we display the cards which the user liked */}
              {filteredByLiked && (
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
              ) }
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Profile;
