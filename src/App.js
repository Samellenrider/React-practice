import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/Useroutput';


class App extends Component {
  state = {
    persons: [
      {id:'jsfkgh', name: 'Sam', age: 20},
      {id:'sdfnir', name: 'Chris', age: 25},
      {id:'dofios', name: 'Emma', age: 20}
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

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
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Look at our Peeeeeps!</h1>
        </header>
        <button 
        style={style}
         onClick={this.togglePersonsHandler}> Toggle Peeps </button>
        {person}
      </div>
    );
  }
}

export default App;
