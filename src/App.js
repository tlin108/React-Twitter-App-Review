import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

import LogoHeader from './components/LogoHeader';
import FilterSection from './components/FilterSection';

export default class App extends Component {
  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <FilterSection />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    );
  }
}
