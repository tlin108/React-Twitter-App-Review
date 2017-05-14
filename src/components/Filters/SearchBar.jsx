import React, { Component } from 'react';
import { Grid, Header, Icon, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  handleTextInput(textInput) {
    this.props.updateFilterText(textInput);
  }

  render() {
    return (
      <Grid.Column floated='left'>
        <Header as='h4' floated='left'>Filter by keyword</Header>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='Search...'
          className='SearchBar'
          value={this.props.filterText}
          onChange={(e) => this.handleTextInput(e.target.value)}
        />
      </Grid.Column>
    )
  }
}

export default SearchBar;