import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';

import LogoHeader from './components/logoHeader';
import SearchBar from './components/searchBar';
import StarsFilter from './components/starsFilter';
import ReviewCount  from './components/reviewCount';
import ReviewTable from './components/reviewTable';
import LoadMoreReviews from './components/loadMoreReviews';

import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      filterText: '',
      pages: 1 
    }
    this.fetchData = _.debounce(this.fetchData.bind(this), 1000);
    this.updateFilterText = this.updateFilterText.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  fetchData() {
    axios.get('http://exercises.appfigures.com/reviews?q=' + 
      this.state.filterText + '&page=' +
      this.state.pages)
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
        console.log(error);
      });
  }

  updateFilterText(input) {
    this.setState({
      isLoading: true,
      filterText: input,
      pages: 1
    }, this.fetchData());
  }
  
  loadMore() {
    const addPage = this.state.pages + 1;
    this.setState({
      isLoading: true,
      pages: addPage
    }, this.fetchData());
  }
  
  componentDidMount() {
    this.fetchData('');
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
          <StarsFilter />
        </Grid>
        <ReviewCount 
          isLoading={this.state.isLoading} 
          reviewsLength={this.state.reviewsLength} 
          total={this.state.data.total}
        />
        <br />
        <ReviewTable 
          isLoading={this.state.isLoading} 
          reviews={this.state.data.reviews}
          filterText={this.state.filterText}
        />
        <br />
        <LoadMoreReviews
          isLoading={this.state.isLoading} 
          loadMore={this.loadMore}
        />
      </Container>
    );
  }
}
