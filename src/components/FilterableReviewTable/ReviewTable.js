import React, { Component } from 'react';

import ReviewDateRow from './ReviewTable/ReviewDateRow';
import ReviewCard from './ReviewTable/ReviewCard';

import _ from 'lodash';

export default class ReviewTable extends Component {
  render() {
    var reviews = [];
    for (var index in this.props.reviews){
      var review = this.props.reviews[index];
      var dateTime = review.date.split('T');
      review.day = dateTime[0];
      review.time = dateTime[1];
      review.stars = parseInt(review.stars, 0);
      reviews.push(review);
    }
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