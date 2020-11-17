import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { StateProvider } from "./Context";

const initialState = {
  isAuth: JSON.parse(window.sessionStorage.getItem("token")),
  user: {}
};

// const initialState = {
//   isAuth: false
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true
      };
    case "USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("app")
);
