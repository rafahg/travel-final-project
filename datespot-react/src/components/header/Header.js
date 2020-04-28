import React, { useContext } from "react";
import SpotContext from "../../context/spot/SpotContext";

const Header = () => {
  const spotContext = useContext(SpotContext);

  const { spots, something } = spotContext;

  return (
    <div>
      {spots.map((spot) => (
        <h3>{spot.title}</h3>
      ))}
    </div>
  );
};

export default Header;
