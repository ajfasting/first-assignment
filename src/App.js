import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: "ativers"
  }

  nameChangedHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  buttonNameChangedHandler = () => {
    this.setState({userName: "afasting"})
  }


  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserInput changed={this.nameChangedHandler} currentName={this.state.userName}/> 
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="afasting"/>
        <button onClick={this.buttonNameChangedHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
