import React from 'react';
import { Button } from 'semantic-ui-react';

const loadMoreReviews = (props) => {
  if(props.isLoading){
    return <Button 
            color='teal'
            fluid
            loading>
          </Button>
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