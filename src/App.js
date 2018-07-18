import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Water from './components/Water';
import Boat from './components/Boat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boat/>
        <Water isFlowing />
      </div>
    );
  }
}

export default App;
