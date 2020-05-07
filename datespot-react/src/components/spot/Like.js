import React from "react";
import "./css/SpotItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Like = ({ likeCount, setLikeState, color }) => {
  return (
    <div className="spotText">
      <span>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: `${color}`, cursor: "pointer" }}
          onClick={setLikeState}
        />{" "}
        {likeCount()}
      </span>
    </div>
  );
};

export default Like;
