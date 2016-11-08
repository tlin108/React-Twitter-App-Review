import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';

import FilterByKeyword from './FilterSection/FilterByKeyword';
import FilterByRating from './FilterSection/FilterByRating';


export default class LogoHeader extends Component {
  render() {
    return ( 
        <Grid.Column floated='left' width={6}>
          <Header as='h4' floated='left'>Filter by keyword</Header>
          <FilterByKeyword 
            filterText={this.props.filterText}
            onUserInput={this.props.onUserInput}
          />
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
          <Header as='h4' floated='right'>Filter by rating</Header>
          <FilterByRating />
        </Grid.Column>
    );
  }
}