import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';
import API_KEY from '../config/config.js';

import LogoHeader from './components/LogoHeader';
import SearchBar from './components/Filters/SearchBar';
import StarsSelect from './components/Filters/StarsSelect';
import ReviewCount  from './components/ReviewCount';
import ReviewTable from './components/ReviewTable';
import LoadMoreReviews from './components/LoadMoreReviews';

import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false,
      data: [],
      filterText: '',
      stars: '1,2,3,4,5',
      pages: 1 
    }
    this.getFetchURL = this.getFetchURL.bind(this);
    this.fetchData = _.debounce(this.fetchData.bind(this), 500);
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateStarsRating = this.updateStarsRating.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  getFetchURL() {
    var fetchURL = API_KEY +
      this.state.stars + '&page=' + this.state.pages;
    if (this.state.filterText !== ''){
      fetchURL = fetchURL + '&q=' + this.state.filterText;
    }
    return fetchURL;
  }

  fetchData() {
    axios.get(this.getFetchURL())
      .then((response) => {
        if (this.state.pages > 1){
          var additionalReviews = _.concat(this.state.data.reviews, response.data.reviews);
          response.data.reviews = additionalReviews;
        }
        this.setState({
          data: response.data,
          reviewsLength: response.data.reviews.length,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          hasError: true
        });
      });
  }

  updateFilterText(input) {
    this.setState({
      isLoading: true,
      filterText: input,
      pages: 1
    }, this.fetchData());
  }

  updateStarsRating(input) {
    this.setState({
      isLoading: true,
      stars: input,
      pages: 1
    }, this.fetchData());
  }
  
  loadMore() {
    const nextPage = this.state.pages + 1;
    this.setState({
      isLoading: true,
      pages: nextPage
    });
    this.fetchData();
  }
  
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <Grid divided='vertically' columns={4}>
          <SearchBar
            filterText={this.state.filterText} 
            updateFilterText={this.updateFilterText}
          />
          <StarsSelect 
            updateStarsRating={this.updateStarsRating}
          />
        </Grid>
        <ReviewCount 
          isLoading={this.state.isLoading}
          hasError={this.state.hasError} 
          reviewsLength={this.state.reviewsLength} 
          total={this.state.data.total}
        />
        <br />
        <ReviewTable 
          isLoading={this.state.isLoading}
          hasError={this.state.hasError} 
          reviews={this.state.data.reviews}
          filterText={this.state.filterText}
        />
        <br />
        <LoadMoreReviews
          isLoading={this.state.isLoading}
          hasError={this.state.hasError} 
          loadMore={this.loadMore}
        />
      </Container>
    );
  }
}