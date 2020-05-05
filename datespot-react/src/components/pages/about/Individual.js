import React from "react";
import { Image } from "react-bootstrap";

export const Individual = ({ img, desc, name, link }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Image src={img} rounded />
      </div>
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <h3>{name}</h3>
        <h5>{desc}</h5>
        <h6>
          Feel free to checkout my <a href={link}>GitHub</a> at any time!
        </h6>
      </div>
    </div>
  );
};

export default Individual;
