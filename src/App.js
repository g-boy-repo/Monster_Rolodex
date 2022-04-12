import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Goblin',
          id: '1',
        },
        {
          name: 'Troll',
          id: '2',
        },
        {
          name: 'Ogre',
          id: '3',
        },
        {
          name: 'Giant',
          id: '4',
        }
      ]
    }
  }
  render() {
    return (
    <div className="App">
      {this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          )
      })}
    </div>
  );
  }
}

export default App;
