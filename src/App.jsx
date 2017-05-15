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
      data: [],
      filterText: '',
      starsSelect: '1,2,3,4,5',
      pages: 1 
    }
    this.getFetchURL = this.getFetchURL.bind(this);
    this.fetchData = _.debounce(this.fetchData.bind(this), 500);
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateStarsRating = this.updateStarsRating.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  getFetchURL() {
    var fetchURL = API_KEY +
      this.state.starsSelect + '&page=' + this.state.pages;
    if (this.state.filterText !== ''){
      fetchURL = fetchURL + '&q=' + this.state.filterText;
    }
    return fetchURL;
  }

  fetchData() {
    fetch(this.getFetchURL())
    .then(res => res.json())
    .then(data => {
      if (this.state.pages > 1){
          var additionalReviews = _.concat(this.state.data.reviews, data.reviews);
          data.reviews = additionalReviews;
      }
      this.setState({
        data: data,
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
    this.fetchData();
  }

  updateStarsRating(starsSelect) {
    this.setState({
      isLoading: true,
      starsSelect,
      pages: 1
    });
    this.fetchData();
  }
  
  loadMoreReviews() {
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
        <ReviewTable 
          isLoading={this.state.isLoading}
          hasError={this.state.hasError} 
          reviews={this.state.data.reviews}
          totalReviewsCount={this.state.data.total}
          loadMoreReviews={this.loadMoreReviews}
        />
      </Container>
    );
  }
}