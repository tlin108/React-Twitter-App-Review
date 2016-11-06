import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import FilterSection from './FilterableReviewTable/FilterSection';
import ReviewTable from './FilterableReviewTable/ReviewTable';


export default class FilterableReviewTable extends Component {
  render() {
    return (
      <Container>
        <FilterSection />
        <br />
        <ReviewTable reviews={this.props.reviews.reviews}/>
      </Container>
    );
  }
}