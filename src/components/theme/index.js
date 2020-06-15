import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const AppTheme =(props)=> {
  return (
    <MuiThemeProvider theme={theme}>
        {props.children}
    </MuiThemeProvider>
  );
}

export default (AppTheme)
