import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const styles = {
  root: {
    flexGrow: 1,
  },
  app:{
    height:'100%',
  },
  gallery:{
    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%', },
  flex: {
    flex: 1,
  },
  plusButton:{
    position: 'absolute', bottom: 10
  },
};

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Button color="primary" variant="fab" className={classes.plusButton}>
          <QuestionAnswerIcon/>
        </Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Dashboard);
