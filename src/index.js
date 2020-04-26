import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes";
import { HashRouter } from "react-router-dom";
import AppStore from './AppStore';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={AppStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , document.getElementById("root")
);
