import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';

function ReviewCard(props) {
  const { title, review, author, day, time, stars } = props.review;
  return (
    <Card fluid>
      <Card.Content header={title} />
      <Card.Content description={review} />
      <Card.Content extra>
        <Icon name='user' />
        {author}
        &nbsp;
        <Icon name='wait' />
        {day}
        &nbsp;
        {time}
        &nbsp;
        <Rating maxRating={5} defaultRating={stars} icon='star' disabled/>
      </Card.Content>
    </Card>
  );
}

export default ReviewCard;