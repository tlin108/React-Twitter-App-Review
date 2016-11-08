import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';

import LogoHeader from './components/logoHeader';
import SearchBar from './components/searchBar';
import StarsFilter from './components/starsFilter';
import ReviewCount  from './components/reviewCount';
import ReviewTable from './components/reviewTable';

import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      filterText: '' 
    }
    this.fetchData = this.fetchData.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.applyFilter = _.debounce(this.applyFilter.bind(this), 500);
  }

  fetchData(input) {
    axios.get('http://exercises.appfigures.com/reviews?q=' + input)
      .then((response) => {
        this.setState({
          data: response.data,
          size: response.data.reviews.length,
          isLoading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateFilter(input) {
    this.setState({
      isLoading: true,
      filterText: input
    });
    this.applyFilter(input);
  }

  applyFilter(input) {
    this.fetchData(input);
  }

  componentDidMount() {
    this.fetchData('');
  }

  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <Grid>
          <SearchBar filterText={this.state.filterText} search={this.updateFilter}/>
          <StarsFilter />
        </Grid>
        <ReviewCount 
          isLoading={this.state.isLoading} 
          size={this.state.size} 
          total={this.state.data.total}/>
        <br />
        <ReviewTable 
          reviews={this.state.data.reviews}
          filterText={this.state.filterText}
          isLoading={this.state.isLoading} 
        /> 
      </Container>
    );
  }
}
