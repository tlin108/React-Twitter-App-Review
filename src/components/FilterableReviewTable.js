import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import FilterSection from './FilterableReviewTable/FilterSection';


export default class LogoHeader extends Component {
  render() {
    return (
      <Container>
        <FilterSection />
      </Container>
    );
  }
}