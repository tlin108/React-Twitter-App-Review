import React from 'react';
import { Segment } from 'semantic-ui-react';

const ReviewDateRow = (props) => {
  return (
    <Segment tertiary>
      {props.date}
    </Segment>
  );
}

export default ReviewDateRow;