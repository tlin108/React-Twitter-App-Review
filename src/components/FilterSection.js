import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

import FilterByKeyword from './FilterOptions/FilterByKeyword';
import FilterByRating from './FilterOptions/FilterByRating';


export default class LogoHeader extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column floated='left' width={6}>
            <Header as='h4' floated='left'>Filter by keyword</Header>
            <FilterByKeyword />
          </Grid.Column>
          <Grid.Column floated='right' width={3}>
            <Header as='h4' floated='right'>Filter by rating</Header>
            <FilterByRating />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}