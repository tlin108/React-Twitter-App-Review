import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { text: 'One Star', value: 1 },
  { text: 'Two Star', value: 2 },
  { text: 'Three Star', value: 3 },
  { text: 'Fourth Star', value: 4 },
  { text: 'Five Star', value: 5 },
]

export default class FilterByRating extends Component {
  render() {
    return (
      <Dropdown
        selection
        options={options}
        placeholder='All Ratings'
      />
    );
  }
}