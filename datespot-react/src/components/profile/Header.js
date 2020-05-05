import React from "react";
import "./Header.css";
import table from "../../assets/images/table.jpg";

const Header = () => {
  return (
    <div className="headline">
      <img style={{ width: "-webkit-fill-available" }} src={table} id="im" />
    </div>
  );
};

export default Header;
