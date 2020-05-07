import React, { useContext, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./css/SpotItem.css";
import { Link } from "react-router-dom";
import SpotContext from "../../context/spot/SpotContext";
import AuthContext from "../../context/auth/AuthContext";
import Like from "./Like";

const SpotItem = ({
  title,
  description,
  url,
  longitude,
  latitude,
  location,
  avg_cost,
  id,
  summary,
  address,
  dress,
  best_times,
  advice,
}) => {
  const spotContext = useContext(SpotContext);
  const authContext = useContext(AuthContext);
  const {
    likes,
    addToLikeCount,
    removeFromLikeCount,
    clearFilter,
  } = spotContext;
  const { user } = authContext;

  useEffect(() => {
    setColorOfHeart();
  }, [likes]);

  const [color, setColor] = useState("");

  const likeCount = () => {
    if (likes !== null) {
      return likes.filter((like) => like.spot_id === id).length;
    } else {
      return 0;
    }
  };

  const setColorOfHeart = () => {
    if (likes == null) {
      setColor("black");
    } else {
      let count = likes.filter(
        (like) => like.spot_id === id && like.user_id === 1
      ).length;
      if (count === 0) {
        setColor("black");
      } else {
        setColor("red");
      }
    }
  };

  const setLikeState = () => {
    if (color === "black") {
      addToLikeCount({ spot_id: id, user_id: user.id });
    } else {
      removeFromLikeCount({ spot_id: id, user_id: user.id });
    }
  };

  return (
    <Card data-test="card-container" className="shadow">
      <Card.Img variant="top" src={url} />

      <Card.Body>
        <Card.Title data-test="text-container" className="spotText">
          <span>{title}</span>
        </Card.Title>
        <Card.Text data-test="description-container" className="spotText">
          <span>{summary}</span>
        </Card.Text>
        {user && (
          <Like
            setLikeState={setLikeState}
            likeCount={likeCount}
            color={color}
          />
        )}
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
                  avg_cost: avg_cost,
                  summary: summary,
                  address: address,
                  dress: dress,
                  best_times: best_times,
                  advice: advice,
                  id: id,
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
