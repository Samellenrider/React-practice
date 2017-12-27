import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sam', age: 20},
      {name: 'San', age: 25},
      {name: 'Emma', age: 20}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my world</h1>
        </header>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> I wrote this stuff </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My favorite thing is food! </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I love Zara Larsson! </Person>
      </div>
    );
    ///return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'loololopl'))
  }
}

export default App;
