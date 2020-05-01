import React from "react";
import { Badge } from "react-bootstrap";

const TagItem = ({ tag }) => {
    return (
        <Badge variant="secondary">{tag}</Badge>
    );
};

export default TagItem;