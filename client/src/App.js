import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Search from './components/Search';

import { Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';

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
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      {/* <Route path="/" render={Nav} /> */}
      <Route exact path="/app" render={App}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)

export default App;
