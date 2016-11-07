import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import FilterSection from './FilterableReviewTable/FilterSection';
import ReviewCount  from './FilterableReviewTable/ReviewCount';
import ReviewTable from './FilterableReviewTable/ReviewTable';


export default class FilterableReviewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    console.log(filterText);
    console.log(this.state.filterText);
    this.setState({
      filterText: filterText,
    });
    console.log(this.state.filterText);
  }

  render() {
    return (
      <Container>
        <FilterSection 
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ReviewCount total={this.props.reviews.total} page={this.props.reviews.this_page}/>
        <br />
        <ReviewTable 
          reviews={this.props.reviews.reviews}
          filterText={this.state.filterText}
        />
      </Container>
    );
  }
}