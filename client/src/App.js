import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StoriesContainer from './containers/StoriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route path="/headlines" component={StoriesContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
