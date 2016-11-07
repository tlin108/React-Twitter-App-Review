import React, { Component } from 'react';
import { Icon, Input } from 'semantic-ui-react';

export default class FilterByKeyword extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('Before keyboard' + e.target.value);
    this.props.onUserInput(
      e.target.value
    );
    console.log('In keyboard' + e.target.value);
  }

  render() {
    return (
      <Input
        icon={<Icon name='search' inverted circular link />}
        text="text"
        placeholder='Search...'
        className='SearchBar'
        value={this.props.filterText}
        onChange={this.handleChange}
      />
    );
  }
}