import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      500: '#571845'
    },
    secondary : {
      main : "#ffffff"
    }
  },
});

const styles = {

}

const AppBase =(props)=> {
  return (
    <MuiThemeProvider theme={theme}>
      <Header></Header>
      <div style={{marginTop:"75px"}}>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}

AppBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(AppBase))
