import React, { Fragment } from "react";

export const CommentsHeader = () => {
  return (
    <Fragment>
      <div style={{ borderTop: "1px solid black", marginTop: "30px" }}></div>
      <div
        style={{ marginTop: "5px", marginBottom: "5px" }}
        className="text-center"
        data-test="comments-container"
      >
        <h3>Feedback on this spot</h3>
      </div>
    </Fragment>
  );
};

export default CommentsHeader;
