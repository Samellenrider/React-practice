import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my world</h1>
        </header>
        <Person name="Sam" age="20" />
        <Person name="San" age="25"/>
        <Person name="Sam" age="22"/>
        <Person name="Sepp" age="21"/>
      </div>
    );
    ///return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'loololopl'))
  }
}

export default App;
