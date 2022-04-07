// By importing this it allows us to use class Component built in functionalities
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// I want you to make this class called App
// and I want you to extend the fuctionality of this  { Component } class that react has given us
class App extends Component {
  // it also creates this render() method for class base components
  render() {
    // What we are passing in render() method is this return statement
    return (
    // Inside here are JSX that tells the browser how to render the page
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
