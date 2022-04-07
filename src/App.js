// By importing this it allows us to use class Component built in functionalities
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// I want you to make this class called App
// and I want you to extend the fuctionality of this  { Component } class that react has given us
class App extends Component {
  // In class base component the way to access or generate the state is through constructor method
  constructor() {
    super();
    // instantiate the state object
    this.state = {
      name: 'Felix Andrew'
    }
  }
  // it also creates this render() method for class base components
  render() {
    // What we are passing in render() method is this return statement
    return (
    // Inside here are JSX that tells the browser how to render the page
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* referencing our state and referencing the key to get the name value */}
        {/* now this paragraph tag is no longer static it is now dynamic  */}
          Hello {this.state.name}!
        </p>
        <button>Change Name</button>
      </header>
    </div>
  );
  }
}

export default App;
