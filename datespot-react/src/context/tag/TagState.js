import React, { useReducer, useContext } from "react";
import axios from "axios";
import TagContext from "./TagContext";
import TagReducer from "./TagReducer";
import * as Types from "../Types";

const TagState = (props) => {
  const initialState = {
    tags: null,
    error: null,
    filteredTagsToSearch: null,
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
    clearFilteredTagSearch();
    dispatch({
      type: Types.ADD_TAG_FILTER,
      payload: tag,
    });
  };

  const clearFilteredTagSearch = (tag) => {
    dispatch({
      type: Types.REMOVE_FILTER,
    });
  };

  return (
    <TagContext.Provider
      value={{
        tags: state.tags,
        filteredTagsToSearch: state.filteredTagsToSearch,
        addToFilteredTagSearch,
        getTags,
      }}
    >
      {props.children}
    </TagContext.Provider>
  );
};

export default TagState;
