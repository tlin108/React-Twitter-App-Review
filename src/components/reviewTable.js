import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import ReviewDateRow from './ReviewTable/reviewDateRow';
import ReviewCard from './ReviewTable/reviewCard';

import _ from 'lodash';

export default class ReviewTable extends Component {
  render() {
    if (this.props.isLoading || this.props.reviews === undefined){
      return <Segment>
              <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
              </Dimmer>

              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
             </Segment>
    } 
    else if(this.props.reviews.length === 0){
      return <Segment>
              No result
             </Segment>
    };

    var reviews = [];

    this.props.reviews.forEach((review) => {
      var dateTime = review.date.split('T');
      review.day = dateTime[0];
      review.time = dateTime[1];
      review.stars = parseInt(review.stars, 0);
      reviews.push(review);
    })
    reviews= _.sortBy(reviews, ['day']).reverse();

    var rows = [];
    var lastDay = null;
    reviews.forEach(function(review) {   
      if (review.day !== lastDay) {
        rows.push(<ReviewDateRow date={review.day} key={review.day} />);
      }
      rows.push(<ReviewCard review={review} key={review.id} />);
      lastDay = review.day;
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}