import React, { Component } from 'react';
import { Icon, Input } from 'semantic-ui-react';

export default class FilterByKeyword extends Component {
  render() {
    return (
      <Input
        icon={<Icon name='search' inverted circular link />}
        placeholder='Search...'
        className='SearchBar'
      />
    );
  }
}