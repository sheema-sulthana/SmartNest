import React, { Component } from 'react';
import './App.css';

class CounterApp extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  inDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  decrementCount = this.inDecrement;

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Counter: {this.state.count}</h1>
        <button
          className="counter-btn"
          onClick={this.incrementCount}
          disabled={this.state.count === 10}
        >
          +
        </button>
        <button
          className="counter-btn"
          onClick={this.decrementCount}
          disabled={this.state.count === 0}
        >
          -
        </button>
      </div>
    );
  }
}

export default CounterApp;