// react
import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
// component
import App from "./App";
// style
import "./assets/scss/main.scss";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
