import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // let users;
  fetchUsers = () => {
    return fetch(`/api/users`)
      .then(users => users.json)
      .then(data => data);
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
