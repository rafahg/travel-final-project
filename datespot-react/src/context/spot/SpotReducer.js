import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.ADD_SPOT:
      console.log("im in add spot");
    case Types.FILTER_SPOTS:
      return {
        ...state,
        filtered: state.spots.filter((spot) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return spot.title.match(regex) || spot.description.match(regex);
        }),
      };
    case Types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
