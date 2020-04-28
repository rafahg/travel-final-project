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
      },
      {
        id: 2,
        title: "a great sight to behold",
        description: "a lovely time in London shard",
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
