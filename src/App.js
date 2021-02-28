import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {
                name: 'name 1',
                age: 18
            },
            {
                name: 'name 2',
                age: 28
            },
            {
                name: 'name 3',
                age: 38
            }
        ],
        description: 'this is the description in state'
    };

    changePerson = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 81
                },
                {
                    name: 'another name 2',
                    age: 82
                },
                {
                    name: 'another name 3',
                    age: 83
                }
            ],
            anotherDescription: 'this is another description in state'
        })
    };

    editInputHandler = (event) => {
      this.setState({
          persons: [
              {
                  name: 'another name1',
                  age: 81
              },
              {
                  name: 'another name 2',
                  age: 82
              },
              {
                  name: event.target.value,
                  age: 83
              }
          ],
          anotherDescription: 'this is another description in state'
      })
    };

    render() {
        const buttonStyles = {
            backgroundColor: "#cccccc",
            border: "#ccc 1px solid",
            cursor: "pointer",
            padding: "8px"
        };


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button
                    style={buttonStyles}
                    onClick={this.changePerson.bind(this, 'new name for first person')}>Change Name</button>
                <p className="App-intro">
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        myClick={() => {this.changePerson("my new name")}}
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                    >
                        {this.state.description}
                    </Person>
                    <Person
                        editInput={this.editInputHandler}
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </p>
            </div>
        );
    }
}

export default App;
