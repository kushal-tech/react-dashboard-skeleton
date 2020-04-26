import React from 'react';
import Dialog, {DialogContent,DialogContentText,withMobileDialog,} from 'material-ui/Dialog';
import {CircularProgress} from 'material-ui/Progress';

class BottomLoader extends React.Component{

  constructor(props){
    super();
    this.state = {show:props.show};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.show!=this.props.show){
      this.setState({show:nextProps.show});
    }
  }

  render(){
    return (
      <div>
      {this.state.show?(
        <div style={{display:"block"}}>
          <div className="center"><CircularProgress /></div>
        </div>
      ):(
        <div style={{display:"none"}}>
          <div className="center"><CircularProgress /></div>
        </div>
      )}
      </div>
    );
  }
}

export default (BottomLoader);
