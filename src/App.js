import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        name: 'default',
        nameLength: 7,
    };

    nameChange = (event) => {
        let name = event.target.value;
        this.setState({name: name});
        this.setState({nameLength: name.length});
        console.log(name);
    }

    render() {
        let personList = null;
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

                <h1>assignment 2</h1>
                <input onChange={this.nameChange} value={this.state.name} />
                <p>Length: {this.state.nameLength}</p>
            </div>
        );
    }
}

export default App;
