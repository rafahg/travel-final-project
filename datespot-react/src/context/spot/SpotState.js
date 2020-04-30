import React, { useReducer } from "react";
import SpotContext from "./SpotContext";
import SpotReducer from "./SpotReducer";
import * as Types from "../Types";

const SpotState = (props) => {
  const initialState = {
    spots: [
      {
        id: 1,
        title: "romantic evening in my house",
        description: "a lovely walk down little venice",
        image: "/src/assets/images/littlevenice.jpeg",
        lat: "51.5245063",
        lon: "-0.1866762",
      },
      {
        id: 2,
        title: "a great sight to behold",
        description: "a lovely time in London shard",
        image: "/assets/images/shard.jpeg",
        lat: "51.5045",
        lon: "-0.0886887",
      },
      {
        id: 3,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
        lat: "51.4978095",
        lon: "-0.1767122",
      },
      {
        id: 4,
        title: "high class dining",
        description:
          "ideal for foodies with a person with a discerning palate",
        image: "/assets/images/sciencemuseum.jpeg",
        lat: "51.509333",
        lon: "-0.1806639",
      },
      {
        id: 5,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
        lat: "51.4978095",
        lon: "-0.1767122",
      },
      {
        id: 6,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
        lat: "51.4978095",
        lon: "-0.1767122",
      },
      {
        id: 7,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
        lat: "51.4978095",
        lon: "-0.1767122",
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  //filter client
  const filterSpots = (text) => {
    dispatch({ type: Types.FILTER_SPOTS, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: Types.CLEAR_FILTER });
  };

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
        filtered: state.filtered,
        filterSpots,
        clearFilter,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
