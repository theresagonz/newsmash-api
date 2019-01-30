import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './containers/MySidebar';
import MixContainer from './containers/MixContainer';
import MashContainer from './containers/MashContainer';
import RoutingError from './components/RoutingError';
import ErrorBoundary from './containers/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <React.Fragment>
          <Route path="/" component={Navbar} />
          {/* <Route path="/" component={Sidebar} /> */}
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={MashContainer} />
              <Route exact path="/mixes" component={MixContainer} />
              <Route exact path="/mixes/:topic" component={MixContainer} />
              <Route exact path="/mashes/saved/:id" component={MashContainer} />)} />
              <Route exact path="/mashes/:topic" component={MashContainer} />
              <Route exact path="/mashes" component={MashContainer} />
              <Route component={RoutingError} />
            </Switch>
          </ErrorBoundary>
      </React.Fragment>
    </Router>
  );
};

export default App;
