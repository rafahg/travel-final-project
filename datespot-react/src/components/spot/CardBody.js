import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import Like from "./Like";

import SpotContext from "../../context/spot/SpotContext";
import AuthContext from "../../context/auth/AuthContext";

const CardBody = ({ title, summary, id }) => {
  const spotContext = useContext(SpotContext);
  const authContext = useContext(AuthContext);
  const { likes, addToLikeCount, removeFromLikeCount } = spotContext;
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
    <Card.Body>
      <Card.Title data-test="text-container" className="spotText">
        <span>{title}</span>
      </Card.Title>
      <Card.Text data-test="description-container" className="spotText">
        <span>{summary}</span>
      </Card.Text>
      {user && (
        <Like setLikeState={setLikeState} likeCount={likeCount} color={color} />
      )}
    </Card.Body>
  );
};

export default CardBody;
