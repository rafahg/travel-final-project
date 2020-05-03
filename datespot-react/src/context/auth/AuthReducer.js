import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
      };
    case Types.AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case Types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case Types.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.user.token);
      return {
        ...state,
        ...action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case Types.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case Types.LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case Types.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case Types.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case Types.SPINNER_SHOW:
      return {
        ...state,
        spinner: true,
        spinnerComment: "loading",
      };
    case Types.SPINNER_NOSHOW:
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
};
