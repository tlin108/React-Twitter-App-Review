import React from 'react';
import { Grid, Header, Icon, Input } from 'semantic-ui-react';

import _ from 'lodash';

const SearchBar = (props) => {
  return (
    <Grid.Column floated='left'>
      <Header as='h4' floated='left'>Filter by keyword</Header>
      <Input
        icon={<Icon name='search' inverted circular link />}
        placeholder='Search...'
        className='SearchBar'
        value={props.filterText}
        onChange={event => props.updateFilterText(event.target.value)}
      />
    </Grid.Column>
  )
};

export default SearchBar;