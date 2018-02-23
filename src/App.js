import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    // Initializing state
  }

  handleClick() {
    // Running this function when the button is clicked.
    this.setState({
      count: this.state.count + 1
      // Incrementing this.state.count by one with each press of the button.
    });
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">
          Button Presses: {this.state.count}
        </div>
        <button onClick={() => this.handleClick()}>
          Click Here
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('container'));

export default App;
