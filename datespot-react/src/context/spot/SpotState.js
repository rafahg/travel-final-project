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
    filteredByLiked: null,
    filteredByTag: null,
    filterId: null,
    tags_spots: [
      { id: 1, tag_id: 1, spot_id: 1 },
      { id: 2, tag_id: 1, spot_id: 2 },
      { id: 3, tag_id: 2, spot_id: 2 },
      { id: 4, tag_id: 1, spot_id: 3 },
      { id: 5, tag_id: 3, spot_id: 4 },
      { id: 6, tag_id: 2, spot_id: 3 },
    ],
    likes: [
      { spot_id: 1, user_id: 1 },
      { spot_id: 1, user_id: 2 },
      { spot_id: 2, user_id: 1 },
      { spot_id: 4, user_id: 2 },
      { spot_id: 3, user_id: 1 },
      { spot_id: 6, user_id: 1 },
    ],
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  //filter spot based on tags

  const filterSpotsByTags = (filteredTagsToSearch) => {
    if (state.filterId === filteredTagsToSearch) {
      dispatch({
        type: Types.CLEAR_FILTER_TAG,
      });
      dispatch({
        type: Types.CLEAR_FILTER_BY_SPOT_TAGS,
      });
    } else {
      dispatch({
        type: Types.ADD_FILTER_TAG,
        payload: filteredTagsToSearch,
      });
      let filtered_tag_spots = state.tags_spots.filter(
        (tag_spot) => tag_spot.tag_id === filteredTagsToSearch
      );
      if (state.filtered !== null) {
        //populate filteredByTag based on filtered state
        let filtered_spots = filtered_tag_spots.map((tag_spot) => {
          for (let i = 0; i < state.filtered.length; i++) {
            if (state.filtered[i].id === tag_spot.spot_id) {
              return state.filtered[i];
            }
          }
        });
        dispatch({
          type: Types.FILTER_BY_SPOT_TAGS,
          payload: filtered_spots,
        });
      } else {
        //populate filteredByTag based on spots state.
        let filtered_spots = filtered_tag_spots.map((tag_spot) => {
          for (let i = 0; i < state.spots.length; i++) {
            if (state.spots[i].id === tag_spot.spot_id) {
              return state.spots[i];
            }
          }
        });
        dispatch({
          type: Types.FILTER_BY_SPOT_TAGS,
          payload: filtered_spots,
        });
      }
    }
  };

  const filterSpotsBasedOnLike = (user) => {
    let filterOutLikes = state.likes.filter((like) => like.user_id === user.id);
    let filterBasedOnUserLike = filterOutLikes.map((liked_spot) => {
      for (let i = 0; i < state.spots.length; i++) {
        if (state.spots[i].id === liked_spot.spot_id) {
          return state.spots[i];
        }
      }
    });
    console.log(filterBasedOnUserLike);
    dispatch({
      type: Types.FILTER_BY_USER_LIKES,
      payload: filterBasedOnUserLike,
    });
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

  const getLikes = async () => {
    try {
    } catch (err) {}
  };

  const addToLikeCount = (toAdd) => {
    dispatch({
      type: Types.ADD_TO_LIKE_TABLE,
      payload: toAdd,
    });
  };

  const removeFromLikeCount = (toRemove) => {
    dispatch({
      type: Types.REMOVE_FROM_LIKE_TABLE,
      payload: toRemove,
    });
  };

  return (
    <SpotContext.Provider
      value={{
        spots: state.spots,
        filtered: state.filtered,
        filteredByTag: state.filteredByTag,
        filterId: state.filterId,
        filteredByLiked: state.filteredByLiked,
        likes: state.likes,
        filterSpotsByTags,
        filterSpots,
        clearFilter,
        getSpots,
        filterSpotsBasedOnLike,
        addToLikeCount,
        removeFromLikeCount,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
