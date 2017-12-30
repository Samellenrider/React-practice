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
    textfield: [
      {text: ""}
    ],
    showPersons: false,
  }

  changedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 20},
        {name: 'Sam', age: 24},
        {name: 'Lolllls', age: 28}
      ] 
    })
  }

  write = (event) => {
    this.setState({
      textfield:[
      {text: event.target.value},
      ]
    })
  }

  togglePersonsHandler = () => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer', 
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my world</h1>
        </header>
        <button 
         // style={style}
         onClick={this.togglePersonsHandler()}>Switch Data</button>

      {this.state.showPersons ? 
        <div>
         <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         changed={this.changedHandler}>
         I wrote this stuff </Person>
        </div> : null
      }

        <UserInput text={this.state.textfield[0].text} 
         change={this.write}/>
        <UserOutput 
         text={this.state.textfield[0].text} 
         change={this.write}/>
      </div>
    );
  }
}

export default App;
