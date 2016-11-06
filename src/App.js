import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

import LogoHeader from './components/LogoHeader';
import FilterableReviewTable from './components/FilterableReviewTable';

export default class App extends Component {
  state = {
    data: []
  }

  loadData() {
    fetch("http://exercises.appfigures.com/reviews")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
        });
      });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <FilterableReviewTable reviews={this.state.data}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    );
  }
}
