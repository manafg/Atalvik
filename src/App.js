import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
class App extends Component {
  style = {
    marginTop: '20'
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
