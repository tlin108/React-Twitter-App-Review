import React from 'react';
import { Segment } from 'semantic-ui-react';

function DateCategoryRow(props) {
  return (
    <Segment tertiary>
      {props.date}
    </Segment>
  );
}

export default DateCategoryRow;