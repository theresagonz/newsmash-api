import React from 'react';
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

export default App;
