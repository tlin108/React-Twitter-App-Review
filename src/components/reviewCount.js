import React from 'react';
import { Header } from 'semantic-ui-react';

const ReviewCount = (props) => {
  if(props.isLoading || props.hasError){
    return null;
  }
  return (
    <div className='ReviewCountHeader'>
      <Header as='h3' floated='left'>Showing {props.reviewsLength} reviews of {props.total}</Header>
    </div>
  )
};

export default ReviewCount;