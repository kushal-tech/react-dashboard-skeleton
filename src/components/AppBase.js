import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Dashboard from './dashboard/Dashboard';
const AppBase =(props)=> {
  return (
    <React.Fragment>
      <Header></Header>
      <div style={{marginTop:"75px"}}>
        <Switch>
          <Route path="/home/:name" component={Dashboard} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default AppBase
