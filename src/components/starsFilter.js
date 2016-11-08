import React, { Component } from 'react';
import { Dropdown, Header, Grid } from 'semantic-ui-react';

const options = [
  { text: 'One Star', value: 1 },
  { text: 'Two Star', value: 2 },
  { text: 'Three Star', value: 3 },
  { text: 'Four Star', value: 4 },
  { text: 'Five Star', value: 5 },
]

export default class FilterByRating extends Component {
  render() {
    return (
        <Grid.Column floated='right' width={3}>
          <Header as='h4' floated='right'>Filter by rating</Header>
          <Dropdown
          selection
          options={options}
          placeholder='All Ratings'
        />
        </Grid.Column>
    );
  }
}