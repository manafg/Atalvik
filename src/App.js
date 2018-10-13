import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Currencies from './Components/Currencies/Currencies';
import Error from './Components/Error/Error'

class App extends Component {
  style = {
    marginTop: '20'
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/' component= {Login} exact/>
            <Route path='/Home' component= { Home } exact/>
            <Route path='/Currencies' component = { Currencies }/>
            <Route component={Error} />
        </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
