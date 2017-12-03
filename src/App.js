import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true // default state toggle is true
  };

  // define a method on our component App which we can access with {this.toggle}
  // within this method we are saying change the state 'toggle' to the opposite of what it currently is
  toggle = () => {
    this.setState({ // setState is a method of React Component
      toggle: !this.state.toggle // we want this to be the opposite of its current state
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*pass prop toggle to child component. anytime state updates in parent, it also updates in child/ren component/s*/}
          <Welcome text="Welcome to React, Nani" toggle={this.state.toggle}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*inline conditionals*/}
        {/*if (this.state.togle === true) {<p>This ..</p>}*/}
        {this.state.toggle &&
          <p>This should show and hide</p>
        }
        {/*when you click on the button, run the function toggle*/}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    // access state toggle of parent component as a prop in child component
    const { text, toggle } = this.props;
    console.log(toggle);

    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
