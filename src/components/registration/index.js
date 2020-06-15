import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { TextField, Button } from "@material-ui/core"
import { withRouter } from "react-router-dom"
const styles = {}

import Carousel from "re-carousel"
import IndicatorDots from "./../../common/IndicatorDots"

class Registration extends Component {
  render() {
    const { classes } = this.props
    return (
      <div style={{ height: "300px" }}>
        <Carousel auto widgets={[IndicatorDots]}>
          <div style={{ backgroundColor: "tomato", height: "100%" }}>
            Frame 1
          </div>
          <div style={{ backgroundColor: "orange", height: "100%" }}>
            Frame 2
          </div>
          <div style={{ backgroundColor: "orchid", height: "100%" }}>
            Frame 3
          </div>
        </Carousel>
      </div>
    )
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(Registration))
