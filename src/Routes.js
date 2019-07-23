import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const Dashboard = asyncComponent(() => import("./views/Dashboard/Dashboard"));
const Login = asyncComponent(() => import("./views/Login/Login"));

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={Dashboard} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
  </Switch>
);
