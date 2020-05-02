import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    // case Types.ADD_TAG_FILTER:
    //   return {
    //     ...state,
    //     filteredTagsToSearch: [...state.filteredTagsToSearch, action.payload],
    //   };
    case Types.ADD_TAG_FILTER:
      return {
        ...state,
        filteredTagsToSearch: action.payload,
      };
    // case Types.REMOVE_FILTER:
    //   return {
    //     ...state,
    //     filteredTagsToSearch: state.filteredTagsToSearch.filter(
    //       (tag) => tag !== action.payload
    //     ),
    //   };
    case Types.REMOVE_FILTER:
      return {
        ...state,
        filteredTagsToSearch: null,
      };
    default:
      return state;
  }
};
