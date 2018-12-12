import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello!</h1>
        <Search />
      </div>
    );
  }
}

export default App;
