import React from 'react';
import { Header, Loader } from 'semantic-ui-react';

const ReviewCount = (props) => {
  if(props.isLoading){
    return <div className='ReviewCountHeader'>
            <Header as='h3' floated='left'><Loader active inline /></Header>
           </div>
  }
  return (
    <div className='ReviewCountHeader'>
      <Header as='h3' floated='left'>Showing {props.reviewsLength} reviews of {props.total}</Header>
    </div>
  )
};

export default ReviewCount;