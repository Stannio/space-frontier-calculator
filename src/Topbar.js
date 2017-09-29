import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'

const styles = {
  icon: {
    marginRight: 20,
  },
  flex: {
    flex: 1,
  }
};

class Topbar extends Component {
  render () {
    let { classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Icon className={classes.icon}>
            functions
          </Icon>
          <Typography type="title" color="inherit" className={classes.flex}>
            Space Frontier Calculator
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Topbar)
