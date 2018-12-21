import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeContainer from './containers/WelcomeContainer';
import MixContainer from './containers/MixContainer';
import MashContainer from './containers/MashContainer';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/mixes" component={MixContainer} />
          <Route path="/mixes/:topic" component={MixContainer} />
          <Route path="/mashes" component={MashContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
