import React from 'react';
import { Dropdown, Header, Grid } from 'semantic-ui-react';

const options = [
  { text: 'One Star', value: 1 },
  { text: 'Two Star', value: 2 },
  { text: 'Three Star', value: 3 },
  { text: 'Four Star', value: 4 },
  { text: 'Five Star', value: 5 },
]

const starsFilter = (props) => {
  return (
      <Grid.Column floated='right'>
        <Header as='h4'>Filter by rating</Header>
        <Dropdown
          selection
          floating
          options={options}
          placeholder='All Ratings'
          />
      </Grid.Column>
  );
}

export default starsFilter;