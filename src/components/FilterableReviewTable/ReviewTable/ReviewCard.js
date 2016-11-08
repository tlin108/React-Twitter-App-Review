import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class ReviewCard extends Component {
  render() {
    return (
      <Card fluid>
        <Card.Content header={this.props.review.title} />
        <Card.Content description={this.props.review.review} />
        <Card.Content extra>
          <Icon name='user' />
          {this.props.review.author}
          <Icon name='wait' />
          {this.props.review.day}
          &nbsp;
          {this.props.review.time}
          <Icon name='star' />
          {this.props.review.stars}
        </Card.Content>
      </Card>
    );
  }
}