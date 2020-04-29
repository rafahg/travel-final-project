import React, { useContext } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardDeck } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";

const Spot = () => {
  const spotContext = useContext(SpotContext);

  const { spots } = spotContext;

  return (
    <CardDeck>
      {spots.map((spot) => (
        
          <SpotItem title={spot.title} description={spot.description} />
        
      ))}
    </CardDeck>
  );
};

export default Spot;
