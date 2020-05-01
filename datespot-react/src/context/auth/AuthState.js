import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import setAuthToken from "../../Utils/SetAuthToken";
import * as Types from "../Types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    spinner: false,
    spinnerComment: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("http://localhost:3000/api/v1/auth");

      dispatch({
        type: Types.USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: Types.AUTH_ERROR });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users",
        formData,
        config
      );

      dispatch({
        type: Types.REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: Types.REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    showSpinner();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth",
        formData,
        config
      );

      dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: res.data,
      });
      noShowSpinner();

      loadUser();
    } catch (err) {
      dispatch({
        type: Types.LOGIN_FAIL,
        payload: err.response.data.msg,
      });
      noShowSpinner();
    }
  };

  // Logout
  const logOut = () => dispatch({ type: Types.LOGOUT });

  //show spinner
  const showSpinner = () => dispatch({ type: Types.SPINNER_SHOW });

  //dont show spinner
  const noShowSpinner = () => dispatch({ type: Types.SPINNER_NOSHOW });

  // Clear Errors
  const clearErrors = () => dispatch({ type: Types.CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        spinner: state.spinner,
        register,
        loadUser,
        login,
        logOut,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
