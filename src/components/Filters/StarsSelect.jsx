import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

function StarsSelect(props) {
  return (
    <Grid.Column floated='right'>
      <Header as='h4'>Filter by rating</Header>
      <select className="ui search dropdown" onChange={(e) => props.updateStarsRating(e.target.value)}>
        <option value="1,2,3,4,5">All Ratings</option>
        <option value="1">One Star</option>
        <option value="2">Two Stars</option>
        <option value="3">Three Stars</option>
        <option value="4">Four Stars</option>
        <option value="5">Five Stars</option>
      </select>
    </Grid.Column>
  );
}

export default StarsSelect;