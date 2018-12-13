import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';

import { MenuItem, Jumbotron, Button } from 'react-bootstrap';
import HeadlinesContainer from './containers/HeadlinesContainer';

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <HeadlinesContainer />
      </div>
  );
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" render={Navbar} />
      <Route exact path="/app" render={App}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)

export default App;
