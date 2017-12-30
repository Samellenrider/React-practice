import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/Useroutput';


class App extends Component {
  state = {
    persons: [
      {name: 'Sam', age: 20},
      {name: 'Chris', age: 25},
      {name: 'Emma', age: 20}
    ],
    showPersons: false,
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); //if doesShow === true showPersons === false
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer', 
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
         <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         changed={this.changedHandler}>
         I wrote this stuff </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my world</h1>
        </header>
        <button 
        style={style}
         onClick={this.togglePersonsHandler}>Switch Data</button>
        {person}
      </div>
    );
  }
}

export default App;
