import React, { useReducer } from "react";
import SpotContext from "./SpotContext";
import SpotReducer from "./SpotReducer";

const SpotState = (props) => {
  const initialState = {
    spots: [
      {
        id: 1,
        title: "hi gareth",
        description: "a lovely walk down little venice",
      },
      {
        id: 2,
        title: "a great sight to behold",
        description: "a lovely time in London shard",
      },
    ],
    loading: false,
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  const something = (data) => {
    dispatch({
      type: "ADD_SPOT",
    });
  };

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
        loading: state.loading,
        something,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
