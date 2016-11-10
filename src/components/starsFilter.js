import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const starsFilter = (props) => {
  const handleStarsFilter = (event) => {
    props.updateStarsRating(event.target.value);
  }
  return (
    <Grid.Column floated='right'>
      <Header as='h4'>Filter by rating</Header>
      <select className="ui search dropdown" onChange={handleStarsFilter}>
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

export default starsFilter;