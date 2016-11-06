import React, { Component } from 'react';
import { } from 'semantic-ui-react';

import ReviewDateRow from './ReviewTable/ReviewDateRow';
import ReviewCard from './ReviewTable/ReviewCard';

export default class ReviewTable extends Component {
  render() {
    var rows = [];
    var lastDate = null;
    this.props.reviews.forEach(function(review) {
      if (review.date !== lastDate) {
        rows.push(<ReviewDateRow date={review.date} key={review.date} />);
      }
      rows.push(<ReviewCard review={review} key={review.id} />);
      lastDate = review.date;
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}