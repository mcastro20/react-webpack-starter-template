import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const Main = asyncComponent(() => import("./layouts/Main/Main"));
const Login = asyncComponent(() => import("./layouts/Login/Login"));

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={Main} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
  </Switch>
);
