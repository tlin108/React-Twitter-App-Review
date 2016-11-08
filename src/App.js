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
    this.fetchData = _.debounce(this.fetchData.bind(this), 1000);
    this.updateFilterText = this.updateFilterText.bind(this);
  }

  fetchData() {
    axios.get('http://exercises.appfigures.com/reviews?q=' + this.state.filterText)
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

  updateFilterText(input) {
    this.setState({
      isLoading: true,
      filterText: input
    }, this.fetchData());
  }

  componentDidMount() {
    this.fetchData('');
  }

  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <Grid>
          <SearchBar filterText={this.state.filterText} search={this.updateFilterText}/>
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
