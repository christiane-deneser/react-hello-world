import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true // default state toggle is true
  }

  // define a method on our component App which we can access with {this.toggle}
  // within this method we are saying change the state 'toggle' to the opposite of what it currently is
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle // we want this to be the opposite of its current state
    }) // setState is a method of React Component
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React, Nani"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*inline conditionals*/}
        {this.state.toggle &&
          <p>This should show and hide</p>
        }
        {/*when xou click on the button, run the function toggle*/}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;

    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
