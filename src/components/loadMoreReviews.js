import React from 'react';
import { Button } from 'semantic-ui-react';

const loadMoreReviews = (props) => {
  if(props.isLoading || props.hasError){
    return null;
  }
  return (
    <Button 
      color='teal'
      fluid
      onClick={props.loadMore} >
      Load More Reviews
    </Button>
  );
}

export default loadMoreReviews;