import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { purple, yellow, red } from 'material-ui/colors'
import Main from './Main'
import Topbar from './Topbar'

const theme = createMuiTheme({
  primary: purple,
  accent: yellow,
  error: red
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Topbar />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
