import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import SpotContext from "../../context/spot/SpotContext";

import "./TagItem.css";

const TagItem = ({ tag, tagId }) => {
  const spotContext = useContext(SpotContext);

  const { filterSpotsByTags, filterId } = spotContext;

  const onClick = () => {
    filterSpotsByTags(tagId);
  };

  return (
    <Badge
      variant="light"
      className="tag"
      onClick={onClick}
      style={{
        border: `2px solid ${filterId === tagId ? "red" : "black"}`,
        color: `${filterId === tagId ? "red" : "black"}`,
      }}
    >
      {tag}
    </Badge>
  );
};

export default TagItem;
