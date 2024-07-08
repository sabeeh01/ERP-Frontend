import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <Router />;
};
ReactDOM.render(<App />, document.getElementById("app"));
