import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';

function ReviewCard(props) {
  return (
    <Card fluid>
      <Card.Content header={props.review.title} />
      <Card.Content description={props.review.review} />
      <Card.Content extra>
        <Icon name='user' />
        {props.review.author}
        <Icon name='wait' />
        {props.review.day}
        &nbsp;
        {props.review.time}
        &nbsp;
        <Rating maxRating={5} defaultRating={props.review.stars} icon='star' disabled/>
      </Card.Content>
    </Card>
  );
}

export default ReviewCard;