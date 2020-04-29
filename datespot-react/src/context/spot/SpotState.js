import React, { useReducer } from "react";
import SpotContext from "./SpotContext";
import SpotReducer from "./SpotReducer";

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
        description: "take a trip to the science museum if you're both turned on by the sciences!!!!!!!!!!",
        image: "/assets/images/sciencemuseum.jpeg",
      },
      
    ],
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
