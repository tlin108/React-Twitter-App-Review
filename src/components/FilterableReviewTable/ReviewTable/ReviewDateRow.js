import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class ReviewDateRow extends Component {
  render() {
    return (
      <Segment tertiary>
        {this.props.date}
      </Segment>
    );
  }
}