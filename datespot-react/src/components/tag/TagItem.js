import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import TagContext from "../../context/tag/TagContext";

import "./TagItem.css";

const TagItem = ({ tag }) => {
  const tagContext = useContext(TagContext);

  const {
    filteredTagsToSearch,
    addToFilteredTagSearch,
    clearFilteredTagSearch,
  } = tagContext;

  const onClick = () => {
    if (filteredTagsToSearch.includes(tag)) {
      //remove tag from array
      clearFilteredTagSearch(tag);
    } else {
      //add tag to array
      addToFilteredTagSearch(tag);
    }
  };

  return (
    <Badge variant="secondary" className="tag" onClick={onClick}>
      {tag}
    </Badge>
  );
};

export default TagItem;
