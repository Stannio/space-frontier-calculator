import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

class PopCalculator extends Component {
  constructor() {
    super();
    this.state = {
      popCount: 0,
      minHeight: ''
    }
  }
  calculatePop = (avgHeight) => {
    let popCost = avgHeight / 10;
    let popCalcCost = avgHeight / 10;
    let popCount = 0;
    for (let i = 1; i < popCost; i++) {
      if (popCalcCost < 0) {
        break;
      }
      popCalcCost = popCalcCost - i;
      popCount++
    }
    return popCount
  };
  handleInputChange = event => {
    const target = event.target;
    const { name, value }= target;
    this.setState({
      [name]: value
    });
    if (!isNaN(value)) {
      if (value > 1) {
        let popCount = this.calculatePop(value);
        if (popCount) {
          this.setState({
            popCount: popCount
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
              label="Hoogte"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="3000"
              fullWidth
              margin="normal"
              name="minHeight"
              id="minHeight"
              onChange={this.handleInputChange}
            />
            <Typography type="body2">
              { this.state.popCount > 0 ? `Aantal mannetjes ${this.state.popCount}` : ''}
            </Typography>
          </CardContent>
        </form>
      </Card>
    )
  }
}

export default PopCalculator
