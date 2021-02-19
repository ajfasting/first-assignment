import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "ativers"
  }

  nameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  buttonNameChangedHandler = () => {
    this.setState({username: "aaron.fasting"})
  }


  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserInput changed={this.nameChangedHandler} currentName={this.state.username}/> 
        <UserOutput userName="afasting"/>
        <UserOutput userName={this.state.username}/>   
        <UserOutput userName={this.state.username}/>
        <button onClick={this.buttonNameChangedHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
