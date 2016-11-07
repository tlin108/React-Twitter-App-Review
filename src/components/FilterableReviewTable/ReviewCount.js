import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class ReviewCount extends Component {
  render() {
    var reviewNumber = this.props.page * 25;
    return (
      <Header as='h4'>Showing {reviewNumber} of {this.props.total}</Header>
    );
  }
}