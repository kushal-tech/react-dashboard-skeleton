import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MyMenu from 'common/MyMenu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {

  constructor(){
    super();
	this.state = {isMenu : false}
  }
  
  handleMenu(value) {
	if(value){
	this.setState({isMenu:true});
	} else {
	this.setState({isMenu:false});	  
	}
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed">
          <Toolbar>
			  <IconButton onClick={this.handleMenu.bind(this,true)} className={classes.menuButton} color="inherit" aria-label="Menu">
				<MenuIcon />
			  </IconButton>
			  <div color="inherit" className={classes.grow}>
					<img src="assets/img/logo-desktop.png" width="35px"/>
				</div>
			<Button color="inherit">Login</Button>
		</Toolbar>
        <MyMenu show={this.state.isMenu} onClose={this.handleMenu.bind(this,false)} />
       </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
