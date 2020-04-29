import React, { useContext } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardDeck } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import "./Spot.css";

const Spot = () => {
  const spotContext = useContext(SpotContext);

  const { spots } = spotContext;

  return (
    <CardDeck>
      {spots.map((spot) => (
        
          <SpotItem title={spot.title} description={spot.description} image={spot.image} />
        
      ))}
    </CardDeck>
  );
};

export default Spot;
