import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';
import API_KEY from '../config/config.js';

import LogoHeader from './components/LogoHeader';
import SearchBar from './components/Filters/SearchBar';
import StarsSelect from './components/Filters/StarsSelect';
import ReviewTable from './components/ReviewTable';

import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false,
      reviews: [],
      filterText: '',
      starsSelect: '1,2,3,4,5',
      totalReviewsCount: 0,
      pages: 1 
    }
    this.getAPIroute = this.getAPIroute.bind(this);
    this.fetchReviews = _.debounce(this.fetchReviews.bind(this), 500);
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateStarsRating = this.updateStarsRating.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  getAPIroute() {
    const { starsSelect, pages, filterText } = this.state;
    const query = this.state.filterText ? "&q=" + filterText : "";
    const APIRoute = `${API_KEY}?stars=${starsSelect}&page=${pages}${query}`;
    return APIRoute;
  }

  fetchReviews() {
    fetch(this.getAPIroute())
    .then(res => res.json())
    .then(data => {
      const totalReviews = this.state.pages > 1 ? [...this.state.reviews, ...data.reviews] : data.reviews;
      this.setState({
        reviews: totalReviews,
        totalReviewsCount: data.total,
        isLoading: false,
        hasError: false
      });
    })
    .catch(err => {
      this.setState({
        hasError: true
      });
    });
  }

  updateFilterText(filterText) {
    this.setState({
      isLoading: true,
      filterText,
      pages: 1
    });
    this.fetchReviews();
  }

  updateStarsRating(starsSelect) {
    this.setState({
      isLoading: true,
      starsSelect,
      pages: 1
    });
    this.fetchReviews();
  }
  
  loadMoreReviews() {
    const nextPage = this.state.pages + 1;
    this.setState({
      isLoading: true,
      pages: nextPage
    });
    this.fetchReviews();
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
        <ReviewTable 
          isLoading={this.state.isLoading}
          hasError={this.state.hasError} 
          reviews={this.state.reviews}
          totalReviewsCount={this.state.totalReviewsCount}
          loadMoreReviews={this.loadMoreReviews}
        />
      </Container>
    );
  }
}