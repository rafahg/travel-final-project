import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import TagContext from "../../context/tag/TagContext";

import "./TagItem.css";

const TagItem = ({ tag }) => {
  const tagContext = useContext(TagContext);

  const { filteredTagsToSearch } = tagContext;

  const onClick = () => {
    if (filteredTagsToSearch.includes(tag)) {
      //remove tag from array
      filteredTagsToSearch = filteredTagsToSearch.filter(
        (word) => word !== tag
      );
    } else {
      //add tag to array
      filteredTagsToSearch.push(tag);
    }
  };

  return (
    <Badge variant="secondary" className="tag" onClick={onClick}>
      {tag}
    </Badge>
  );
};

export default TagItem;
