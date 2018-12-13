import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import StoriesContainer from './containers/StoriesContainer';

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <StoriesContainer />
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
