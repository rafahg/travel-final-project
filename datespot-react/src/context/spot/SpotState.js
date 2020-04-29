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
      },
      {
        id: 2,
        title: "a great sight to behold",
        description: "a lovely time in London shard",
        image: "/assets/images/shard.jpeg",
      },
      {
        id: 3,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
      },
      {
        id: 4,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
      },
      {
        id: 5,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
      },
      {
        id: 6,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
      },
      {
        id: 7,
        title: "beauty and brains",
        description:
          "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
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
