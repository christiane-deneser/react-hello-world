import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: 'Hello'
  };

  // arrow function allows us to use 'this' to refer to the component itself
  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  };

  submit = () => {
    console.log(this.text.value);
  };

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
        <h3>{this.state.input}</h3>
        {/*ref: assign a property to a DOM elem. of your comp., using 'this.[whatevername]' */}
        <input type="text" ref={(input) => this.text = input}/>
        {/* we want the value of the input to be the state of the input */}
        <input type="text" onChange={this.updateInput} value={this.state.input}/>
        <button onClick={this.submit}>Show / Hide</button>
      </div>
    );
  }
}

// the function below is basically the same as..
// ref={(input) => this.text = input}
//
// const name = function(input) {
//   this.input = input;
// };

class Welcome extends Component {
  render() {
    const { text } = this.props;

    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
