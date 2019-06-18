import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import {reducer} from "./reducers/reducer"
import ToDoList from "./components/ToDoList"
//import App from "./App";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <ToDoList />
   
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
