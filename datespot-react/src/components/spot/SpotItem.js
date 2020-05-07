import React, { useContext, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./css/SpotItem.css";
import { Link } from "react-router-dom";
import SpotContext from "../../context/spot/SpotContext";
import AuthContext from "../../context/auth/AuthContext";
import Like from "./Like";

const SpotItem = (props) => {
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
      return likes.filter((like) => like.spot_id === props.id).length;
    } else {
      return 0;
    }
  };

  const setColorOfHeart = () => {
    if (likes == null) {
      setColor("black");
    } else {
      let count = likes.filter(
        (like) => like.spot_id === props.id && like.user_id === 1
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
      addToLikeCount({ spot_id: props.id, user_id: user.id });
    } else {
      removeFromLikeCount({ spot_id: props.id, user_id: user.id });
    }
  };

  return (
    <Card data-test="card-container" className="shadow">
      <Card.Img variant="top" src={props.url} />

      <Card.Body>
        <Card.Title data-test="text-container" className="spotText">
          <span>{props.title}</span>
        </Card.Title>
        <Card.Text data-test="description-container" className="spotText">
          <span>{props.summary}</span>
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
