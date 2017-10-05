import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles'
import { indigo, blueGrey, red } from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Main from './Main'
import Topbar from './Topbar'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
    error: red
  }
});

const styles = theme => ({
  container: {
    flexGrow: 1
  }
});

class App extends Component {
  render() {
    let { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Topbar />
          <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12}>
              <Main />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
