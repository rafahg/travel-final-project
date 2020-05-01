import React, { useReducer } from "react";
import axios from 'axios';
import SpotContext from "./SpotContext";
import SpotReducer from "./SpotReducer";
import * as Types from "../Types";

const SpotState = (props) => {
  const initialState = {

    spots: null,
    error: null,

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

  const getSpots = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/spots");
      dispatch({
        type: Types.GET_SPOTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: Types.SPOTS_ERROR,
        payload: err
      });
    }
  };

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
        filtered: state.filtered,
        filterSpots,
        clearFilter,
        getSpots,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
