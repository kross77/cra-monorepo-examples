import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from '@funlib/quiz';
import './App.css';


const MyData = {
  a: "A",
  b: "B",
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{MyData.a} {MyData.b}</p>

          <Quiz />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
