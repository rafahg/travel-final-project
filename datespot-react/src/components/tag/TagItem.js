import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import TagContext from "../../context/tag/TagContext";
import SpotContext from "../../context/spot/SpotContext";

import "./TagItem.css";

const TagItem = ({ tag, tagId }) => {
  const tagContext = useContext(TagContext);
  const spotContext = useContext(SpotContext);

  const { filteredTagsToSearch, addToFilteredTagSearch } = tagContext;
  const { filterSpotsByTags } = spotContext;

  const onClick = () => {
    // if (filteredTagsToSearch === tagId) {
    //   //remove tag from array
    //   clearFilteredTagSearch(tagId);
    // } else {
    //   //add tag to array
    //   addToFilteredTagSearch(tagId);
    // }
    addToFilteredTagSearch(tagId);
    filterSpotsByTags(tagId);
  };

  return (
    <Badge variant="secondary" className="tag" onClick={onClick}>
      {tag}
    </Badge>
  );
};

export default TagItem;
