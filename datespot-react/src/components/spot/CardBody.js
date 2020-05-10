import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Like from "./Like";

import SpotContext from "../../context/spot/SpotContext";
import AuthContext from "../../context/auth/AuthContext";

const CardBody = ({ title, summary }) => {
  const spotContext = useContext(SpotContext);
  const authContext = useContext(AuthContext);
  const { likes, addToLikeCount, removeFromLikeCount } = spotContext;
  const { user } = authContext;

  useEffect(() => {
    setColorOfHeart();
  }, [likes]);

  const [color, setColor] = useState("");

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
