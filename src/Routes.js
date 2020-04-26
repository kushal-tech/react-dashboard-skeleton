import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import asyncComponent from "./AsyncComponent";
//const AsyncStreamBase = asyncComponent(() => import("./stream/StreamBase"));

import AppBase from "./components/AppBase";
import Signup from "./components/registration/Signup";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <AppBase>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/home/:name" component={Dashboard} />
      </Switch>
    </AppBase>
  )
}

export default (App)
