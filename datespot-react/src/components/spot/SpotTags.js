import React, { useContext, useEffect } from "react";
import TagContext from "../../context/tag/TagContext";
import TagItem from "../tag/TagItem";

const SpotTags = () => {
  const tagContext = useContext(TagContext);

  const { getTags, tags } = tagContext;

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="text-center">
      {tags !== null ? (
        tags.map((tag) => <TagItem key={tag.id} tag={tag.tag} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default SpotTags;
