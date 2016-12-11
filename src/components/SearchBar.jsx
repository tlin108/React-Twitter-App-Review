import React from 'react';
import { Grid, Header, Icon, Input } from 'semantic-ui-react';

function SearchBar(props) {
  function handleFilterText(event) {
    props.updateFilterText(event.target.value)
  }

  return (
    <Grid.Column floated='left'>
      <Header as='h4' floated='left'>Filter by keyword</Header>
      <Input
        icon={<Icon name='search' inverted circular link />}
        placeholder='Search...'
        className='SearchBar'
        value={props.filterText}
        onChange={handleFilterText}
      />
    </Grid.Column>
  )
}

export default SearchBar;