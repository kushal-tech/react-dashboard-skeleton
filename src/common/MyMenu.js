import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

class MyMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      menuList: [
        "HOME",
        "ABOUT",
        "CONTACT",
        "COPYRIGHT",
        "ACKNOWLEDGEMENTS",
        "EXIT"
      ],
      selectedMenu: "Home"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show != this.props.show) {
      this.setState({ open: nextProps.show });
    }
  }

  handleClose() {
    this.setState({
      ["left"]: open
    });
    this.props.onClose();
  }

  handleMenuClick(value) {
    this.setState({ selectedMenu: value });
    this.handleClose();
    if (value.toLowerCase() == "home") {
    } else if (value.toLowerCase() == "exit") {
      navigator.app.exitApp();
    } else {
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        open={this.state.open}
        onClose={this.handleClose.bind(this, "left")}
      >
        <div className="center" color="inherit">
          <img
            src="assets/img/logo-desktop.png"
            width="35px"
            style={{ marginTop: "10px" }}
          />
          <Typography variant="h6" gutterBottom>
            App
          </Typography>
        </div>
        <Divider />
      </Drawer>
    );
  }
}

MyMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyMenu);
