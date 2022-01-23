import React from "react";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Create from "./views/Create/Create";
import Details from "./views/Details/Details";
import DragonList from "./views/List/List";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";

export const RouterDom = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute>
        <Route exact path="/" component={DragonList} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/dragon/:id" component={Details} />
      </PrivateRoute>
    </Switch>
  );
};
