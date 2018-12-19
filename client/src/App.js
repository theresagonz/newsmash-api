import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeContainer from './containers/WelcomeContainer';
import MixContainer from './containers/MixContainer';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route path="/mixes" component={MixContainer} />
          {/* <Route path="/mixes/:topic" component={MixContainer} /> */}
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
