import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Search from './components/Search';

import { Navbar, Jumbotron, Button } from 'react-bootstrap';

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <h1>Hello!</h1>
        <Search />
      </div>
  );
}

const Nav = () => {
  return (
    <Navbar>
      <h1>hey</h1>
    </Navbar>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" render={Nav} />
      <Route exact path="/app" render={App}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)

export default App;
