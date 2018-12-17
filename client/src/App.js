import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StoriesContainer from './containers/StoriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <WelcomeContainer />
    </div>
  );
}

export default App;
