import React from 'react';
import { Segment } from 'semantic-ui-react';

function ReviewDateRow(props) {
  return (
    <Segment tertiary>
      {props.date}
    </Segment>
  );
}

export default ReviewDateRow;