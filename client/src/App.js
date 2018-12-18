import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MixContainer from './containers/MixContainer';
import WelcomeContainer from './containers/WelcomeContainer';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/mixes" component={MixContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
