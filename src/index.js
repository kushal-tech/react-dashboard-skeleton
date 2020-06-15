import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import AppStore from './AppStore';
import {Provider} from 'react-redux';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-css-only/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <Provider store={AppStore}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>
  , document.getElementById("root")
);
