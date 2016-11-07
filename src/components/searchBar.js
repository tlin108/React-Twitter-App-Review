import React from 'react';
import { Grid, Header, Icon, Input } from 'semantic-ui-react';

import _ from 'lodash';

const SearchBar = (props) => {
  // screw me i forgot this is just a functional component
  return (
    <Grid>
      <Grid.Column floated='left' width={6}>
        <Header as='h4' floated='left'>Filter by keyword</Header>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='Search...'
          className='SearchBar'
          value={props.filterText}
          onChange={event => props.search(event.target.value)}
        />
      </Grid.Column>
    </Grid>
  )
};

export default SearchBar;