import React, { Component } from 'react';
import './App.css';

import LogoHeader from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
