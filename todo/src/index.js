import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const store = createStore(reducer);

const initialState = {
    todos: [
        {value: "take out garbage",
        completed: false},
        {value: "water plants",
        completed: false},
        {value: "shop for food",
        completed: false},
    ]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default: return state
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
