import React from 'react';
import Dialog, {DialogActions,DialogContent,DialogContentText,withMobileDialog,} from 'material-ui/Dialog';
import {CircularProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';

import AppActions from 'actions/AppActions'
/**
It is a fullscreen loader
**/
class Loader extends React.Component{

  constructor(){
    super();
    this.state = {open:false,message:""};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
  }

  handleChange(){
    this.setState({open:obj.loader,message:obj.message})
  }

  handleRequestClose = (event, reason) => {
    AppActions.addLoader(false);
  };

  render(){
    return (
      <Dialog open={this.state.open} aria-labelledby="responsive-dialog-title" style={{zIndex:99999999999999999999999999999}}>
        {this.state.message!=undefined && this.state.message!=""? (
          <div>
          <DialogContent>
            <DialogContentText>
              {this.state.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose.bind(this)} color="primary">
              Ok
            </Button>
          </DialogActions>
          </div>
        ) : (
          <DialogContent>
            <div className="center"><CircularProgress /></div>
            <DialogContentText>
              Loading...
            </DialogContentText>
          </DialogContent>
        )}
      </Dialog>
    );
  }
}

export default (Loader);
