import React, { useReducer } from "react";
import axios from "axios";
import TagContext from "./TagContext";
import TagReducer from "./TagReducer";
import * as Types from "../Types";

const TagState = (props) => {
    const initialState = {
        tags: null,
        error: null,
        // filtered: null,
    }

    const [state, dispatch] = useReducer(TagReducer, initialState);

    const getTags = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/v1/tags");
            dispatch({
                type: Types.GET_TAGS,
                payload: res.data
            });

        } catch (err){
            dispatch({
                type: Types.TAGS_ERROR,
                payload: err
            });
        }
    };

    return (
        <TagContext.Provider
        value={{
            tags: state.tags,
            getTags,
        }}
        >
            {props.children}
        </TagContext.Provider>
    );
};

export default TagState;