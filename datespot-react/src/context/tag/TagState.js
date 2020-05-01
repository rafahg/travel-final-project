import React, { useReducer, useContext } from "react";
import axios from "axios";
import TagContext from "./TagContext";
import TagReducer from "./TagReducer";
import * as Types from "../Types";

const TagState = (props) => {
  const initialState = {
    tags: null,
    error: null,
    filteredTags: null,
    tags_spots: [
      { id: 1, tag_id: 1, spot_id: 1 },
      // { id: 2, tag_id: 1, spot_id: 2 },
      // { id: 3, tag_id: 2, spot_id: 2 },
      // { id: 4, tag_id: 1, spot_id: 3 },
      // { id: 5, tag_id: 3, spot_id: 4 },
      // { id: 6, tag_id: 2, spot_id: 3 },
    ],
    filteredTagsToSearch: [],
  };

  const [state, dispatch] = useReducer(TagReducer, initialState);

  const getTags = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/tags");
      dispatch({
        type: Types.GET_TAGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Types.TAGS_ERROR,
        payload: err,
      });
    }
  };

  const addToFilteredTagSearch = (tag) => {
    dispatch({
      type: Types.ADD_TAG_FILTER,
      payload: tag,
    });
  };

  const clearFilteredTagSearch = (tag) => {
    dispatch({
      type: Types.REMOVE_FILTER,
      payload: tag,
    });
  };

  return (
    <TagContext.Provider
      value={{
        tags: state.tags,
        filteredTags: state.filteredTags,
        filteredTagsToSearch: state.filteredTagsToSearch,
        tags_spots: state.tags_spots,
        addToFilteredTagSearch,
        clearFilteredTagSearch,
        getTags,
      }}
    >
      {props.children}
    </TagContext.Provider>
  );
};

export default TagState;
