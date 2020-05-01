import * as Types from "../Types";

export default (state, action) => {
    switch (action.type) {
        case Types.GET_TAGS:
        return {
            ...state,
            tags: action.payload,
        };
        case Types.ADD_TAG:
            console.log("I'm in add tag");
            break;
        default:
            return state;
    }
}