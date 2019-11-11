import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {

  onSubmit = () => {
    this.props.history.push('/player');
  }

  onScore = () => {
    this.props.history.push('/score');
  }

  render() {
    return (
      <div>
        <h1>Welcome to Rock, Paper and Scissor!</h1>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={this.onSubmit}
        >
          Let's Play!
        </Button>
        <h6 onClick={this.onScore}  className="scores">View Scores</h6>
      </div>
    );
  }
};

  export default Home;