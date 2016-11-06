import React, { Component } from 'react';

import ReviewDateRow from './ReviewTable/ReviewDateRow';
import ReviewCard from './ReviewTable/ReviewCard';

export default class ReviewTable extends Component {
  render() {
    var reviews = [];
    for (var index in this.props.reviews){
      var review = this.props.reviews[index];
      var dateTime = review.date.split('T');
      review.day = dateTime[0];
      review.time = dateTime[1];
      reviews.push(review);
    }
    console.log(reviews);

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
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}