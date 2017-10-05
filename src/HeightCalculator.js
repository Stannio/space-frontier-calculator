import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

class HeightCalculator extends Component {
  constructor() {
    super();
    this.state = {
      minHeight: 0,
      popCount: ''
    }
  }
  calculateMinHeight = (popCount) => {
    if (popCount < 1) {
      return false;
    }
    let cost = 0;
    for (let i = 1; i < popCount; i++) {
      cost = cost + i;
    }
    return cost * 10;
  };
  handleInputChange = event => {
    const target = event.target;
    const { name, value }= target;
    this.setState({
      [name]: value
    });
    if (!isNaN(value)) {
      if (value > 1) {
        let minHeight = this.calculateMinHeight(value);
        if (minHeight) {
          this.setState({
            minHeight: minHeight
          })
        } else {
          // Show error
        }
      }
    }
  };
  render () {
    return (
      <Card className={this.props.className}>
        <form action="#" onSubmit={this.submit}>
          <CardContent>
            <TextField
              label="Mannetjes"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="50"
              fullWidth
              margin="normal"
              name="popCount"
              id="name"
              onChange={this.handleInputChange}
            />
            <Typography type="body2">
              { this.state.minHeight > 0 ? `Minimale hoogte ${this.state.minHeight}` : ''}
            </Typography>
          </CardContent>
        </form>
      </Card>
    )
  }
}

export default HeightCalculator
