import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    case Types.GET_SPOTS:
      return {
        ...state,
        spots: action.payload,
      };
    case Types.ADD_FILTER_ID:
      return {
        ...state,
        filterId: action.payload,
      };
    case Types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case Types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case Types.FILTER_SPOTS:
      return {
        ...state,
        filtered: state.spots.filter((spot) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return spot.title.match(regex) || spot.description.match(regex);
        }),
      };
    case Types.FILTER_BY_SPOT_TAGS:
      return {
        ...state,
        filteredByTag: action.payload,
      };
    case Types.FILTER_BY_USER_LIKES:
      return {
        ...state,
        filteredByLiked: action.payload,
      };
    case Types.ADD_TO_LIKE_TABLE:
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case Types.REMOVE_FROM_LIKE_TABLE:
      return {
        ...state,
        likes: state.likes.filter(
          (like) =>
            !(
              like.spot_id === action.payload.spot_id &&
              like.user_id === action.payload.user_id
            )
        ),
      };
    case Types.CLEAR_LIKED_ARRAY:
      return {
        ...state,
        filteredByLiked: null,
      };
    case Types.CLEAR_COMMENTS:
      return {
        ...state,
        comments: null,
      };
    case Types.CLEAR_FILTER_BY_SPOT_TAGS:
      return {
        ...state,
        filteredByTag: null,
      };
    case Types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case Types.CLEAR_FILTER_ID:
      return {
        ...state,
        filterId: null,
      };
    case Types.SPOTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
