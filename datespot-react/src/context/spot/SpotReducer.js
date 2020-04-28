export default (state, action) => {
  switch (action.type) {
    case "ADD_SPOT":
      console.log("im in add spot");
    default:
      return state;
  }
};
