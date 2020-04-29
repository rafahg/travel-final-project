import React, { useContext } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import SpotItem from "../../spot/SpotItem";

const Spot = () => {
  const spotContext = useContext(SpotContext);

  const { spots } = spotContext;

  return (
    <div>
      {spots.map((spot) => (
        <div>
          <SpotItem title={spot.title} />
        </div>
      ))}
    </div>
  );
};

export default Spot;
