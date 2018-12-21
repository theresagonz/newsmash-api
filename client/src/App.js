import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchSidebar from './containers/SearchSidebar';
import MixContainer from './containers/MixContainer';
import MashContainer from './containers/MashContainer';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
          <Route path="/" component={SearchSidebar} />
          <Route path="/mixes" component={MixContainer} />
          <Route path="/mixes/:topic" component={MixContainer} />
          <Route path="/mashes" component={MashContainer} />
      </React.Fragment>
    </Router>
  );
};

export default App;
