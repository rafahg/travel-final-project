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
    comments: null,
    tags_spots: null,
    likes: null,
  };

  const [state, dispatch] = useReducer(SpotReducer, initialState);

  //post comment

  const postComment = async (toSend) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `/api/v1/spots/${toSend.spot_id}/comments`,
        toSend,
        config
      );
      dispatch({
        type: Types.ADD_COMMENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.SPOTS_ERROR,
        payload: err,
      });
    }
  };

  //get comment associated with spot

  const getCommentBasedOnSpot = async (spotId) => {
    try {
      const res = await axios.get(`/api/v1/spots/${spotId}/comments`);
      dispatch({
        type: Types.GET_COMMENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.SPOTS_ERROR,
        payload: err,
      });
    }
  };

  //clear comment associated with spot

  const clearComments = () => {
    dispatch({
      type: Types.CLEAR_COMMENTS,
    });
  };

  //filter spot based on tags

  const filterSpotsByTags = async (tagId) => {
    try {
      const res = await axios.get(`/api/v1/tagged_spot?tagid=${tagId}`);
      dispatch({
        type: Types.FILTER_BY_SPOT_TAGS,
        payload: res.data,
      });
      dispatch({
        type: Types.ADD_FILTER_ID,
        payload: tagId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const clearFilterSpotsByTags = () => {
    dispatch({
      type: Types.CLEAR_FILTER_ID,
    });
    dispatch({
      type: Types.CLEAR_FILTER_BY_SPOT_TAGS,
    });
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

    if (filterBasedOnUserLike.length === 0) {
      filterBasedOnUserLike = null;
    }

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
      const res = await axios.get("/api/v1/spots");
      getLikes();
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

  //get likes
  const getLikes = async () => {
    try {
      const res = await axios.get("/api/v1/likes");
      dispatch({
        type: Types.GET_LIKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.LIKES_ERROR,
        payload: err,
      });
    }
  };

  const addToLikeCount = async (toAdd) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/likes", toAdd, config);
      dispatch({
        type: Types.ADD_TO_LIKE_TABLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.LIKES_ERROR,
        payload: err,
      });
    }
  };

  const removeFromLikeCount = async (toRemove) => {
    let toDelete = state.likes.filter(
      (spot) =>
        spot.spot_id === toRemove.spot_id && spot.user_id === toRemove.user_id
    );
    let idToDelete = toDelete[0].id;
    try {
      await axios.delete(`/api/v1/likes/${idToDelete}`);
      dispatch({
        type: Types.REMOVE_FROM_LIKE_TABLE,
        payload: toRemove,
      });
      if (state.filteredByLiked.length === 0) {
        dispatch({
          type: Types.CLEAR_LIKED_ARRAY,
        });
      }
    } catch (err) {
      dispatch({
        type: Types.LIKES_ERROR,
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
        filterId: state.filterId,
        filteredByLiked: state.filteredByLiked,
        likes: state.likes,
        comments: state.comments,
        postComment,
        clearComments,
        getCommentBasedOnSpot,
        filterSpotsByTags,
        clearFilterSpotsByTags,
        filterSpots,
        clearFilter,
        getSpots,
        filterSpotsBasedOnLike,
        addToLikeCount,
        removeFromLikeCount,
        getLikes,
      }}
    >
      {props.children}
    </SpotContext.Provider>
  );
};

export default SpotState;
