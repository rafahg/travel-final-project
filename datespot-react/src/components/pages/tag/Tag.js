import React, { useContext, useEffect } from "react";
import TagContext from "../../../context/tag/TagContext";
import TagItem from "../../tag/TagItem";


const Tag = () => {
    const tagContext = useContext(TagContext);

    const {tags, getTags} = tagContext;

    useEffect(() => {
        getTags();
    }, []);

    return (
        
        tags.map((tag) => <TagItem 
        key={tag.id}
        tag={tag.tag} 
        />)
        
    );
};

export default Tag;