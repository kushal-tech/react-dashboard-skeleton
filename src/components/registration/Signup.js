import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { TextField, Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from "../dashboard/Dashboard";

const styles = {};

class Signup extends Component {

    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

  handleSubmit = () => {
    this.props.history.push("/home/"+this.state.name);
  };

  handleChange=(event)=>{
      this.setState({name:event.target.value})
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <TextField
            onChange={this.handleChange}
            fullWidth placeholder="Enter your name" variant="outlined" /> <br /><br />
        <Button color="primary" variant="outlined" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Signup))
