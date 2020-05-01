import React, { useReducer, useContext } from "react";
import axios from "axios";
import SpotContext from "./SpotContext";
import SpotReducer from "./SpotReducer";
import * as Types from "../Types";

const SpotState = (props) => {
  const initialState = {
    spots: null,
    error: null,
    filtered: null,
    filteredByTag: null,
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  //filter spot based on tags

  const filterSpotsByTags = (filteredTagsToSearch) => {
    if (state.filtered !== null) {
      //populate filteredByTag based on filtered state
    } else {
      //populate filteredByTag based on spots state.
    }
  };

  //filter spot
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
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.SPOTS_ERROR,
        payload: err,
      });
    }
  };

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
        filtered: state.filtered,
        filteredByTag: state.filteredByTag,
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
