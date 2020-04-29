import React, { useContext, Fragment } from "react";
import SpotContext from "../../../context/spot/SpotContext";
import { CardColumns } from "react-bootstrap";
import SpotItem from "../../spot/SpotItem";
import SpotItemHeader from "../../spot/SpotItemHeader";
import SpotFiltered from "../../spot/SpotFiltered";
import "./Spot.css";

const Spot = () => {
  const spotContext = useContext(SpotContext);

  const { spots, filtered } = spotContext;

  // const organiseCards = () => {
  //   let cards_in_group = [];
  //   let amountOfInnerArray = spots.length / 3;
  //   if (amountOfInnerArray % 2 !== 0) {
  //     cards_in_group.push([]);
  //   }

  //   for (let i = 0; i < Math.floor(amountOfInnerArray); i++) {
  //     cards_in_group.push([]);
  //   }
  //   console.log(cards_in_group);

  //   let innerCount = 0;

  //   spots.map((spot, index) => {
  //     if (index === 0) {
  //       cards_in_group[innerCount].push(
  //         <SpotItem
  //           title={spot.title}
  //           description={spot.description}
  //           image={spot.image}
  //         />
  //       );
  //     } else {
  //       if (index % 3 === 0) {
  //         innerCount += 1;
  //       }
  //       cards_in_group[innerCount].push(
  //         <SpotItem
  //           title={spot.title}
  //           description={spot.description}
  //           image={spot.image}
  //         />
  //       );
  //     }
  //   });
  //   console.log("*****");
  //   console.log(cards_in_group.length);
  //   console.log("*****");
  //   console.log(cards_in_group);

  //   console.log(wrapCard(cards_in_group));
  // };

  // const wrapCard = (cards_in_group) => {
  //   let wrapper = null;
  //   console.log(cards_in_group);
  //   cards_in_group.map((cards) => {
  //     wrapper += <CardDeck>{cards}</CardDeck>;
  //   });
  // cards_in_group.map((cards) => {
  //   if (wrapper == null) {
  //     wrapper = (
  //       <CardDeck>
  //         {cards.map((card) => {
  //           return card;
  //         })}
  //       </CardDeck>
  //     );
  //   } else {
  //     wrapper += (
  //       <CardDeck>
  //         {cards.map((card) => {
  //           return card;
  //         })}
  //       </CardDeck>
  //     );
  //   }
  // });
  //   return wrapper;
  // };

  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <SpotItemHeader />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SpotFiltered />
      </div>

      <CardColumns style={{ marginTop: "20px" }}>
        {filtered !== null
          ? filtered.map((spot) => (
              <SpotItem
                key={spot.id}
                title={spot.title}
                description={spot.description}
                image={spot.image}
              />
            ))
          : spots.map((spot) => (
              <SpotItem
                key={spot.id}
                title={spot.title}
                description={spot.description}
                image={spot.image}
              />
            ))}
      </CardColumns>
    </Fragment>
  );
};

export default Spot;
