import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import HeightCalculator from './HeightCalculator'
import PopCalculator from './PopCalculator'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  cards: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Main extends Component {
  render () {
    let { classes } = this.props;
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          <HeightCalculator className={classes.cards} />
        </Grid>
        <Grid item xs={12}>
          <PopCalculator/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Main)
