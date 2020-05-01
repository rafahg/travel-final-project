import React, { useContext, useEffect } from "react";
import TagContext from "../../context/tag/TagContext";
import SpotContext from "../../context/spot/SpotContext";
import TagItem from "../tag/TagItem";
import { Spinner } from "react-bootstrap";

const SpotTags = () => {
  const tagContext = useContext(TagContext);

  const { getTags, tags } = tagContext;

  const spotContext = useContext(SpotContext);

  const { filteredTagsToSearch } = spotContext;

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="text-center">
      {tags !== null ? (
        tags.map((tag) => <TagItem key={tag.id} tag={tag.tag} />)
      ) : (
        <Spinner animation="border" variant="danger" />
      )}
    </div>
  );
};

export default SpotTags;
