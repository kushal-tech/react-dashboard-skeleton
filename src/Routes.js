import React from "react";
import { Switch, Route } from "react-router-dom";

//import asyncComponent from "./AsyncComponent";
//const AsyncStreamBase = asyncComponent(() => import("./stream/StreamBase"));
import Theme from "./components/theme";
import AppBase from "./components/AppBase";
import Registration from './components/registration';

const AppRoute = () => {
  return (
    <Theme>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/home/:name" component={AppBase} />
      </Switch>
    </Theme>
  )
}

export default AppRoute
