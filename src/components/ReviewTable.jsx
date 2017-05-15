import React, { Component } from 'react';
import { Button, Dimmer, Header, Loader, Image, Segment } from 'semantic-ui-react';
import _ from 'lodash';
import moment from 'moment';

import DateCategoryRow from './ReviewTable/DateCategoryRow';
import ReviewCard from './ReviewTable/ReviewCard';

// date time categorization initialization
const TODAY = moment().startOf('day');
const YESTERDAY = moment().subtract(1, 'days').startOf('day');
const THIS_WEEK = moment().startOf('isoWeek');
const LAST_WEEK = moment().subtract(1, 'weeks').startOf('isoWeek');
const THIS_MONTH = moment().startOf('month');
const LAST_MONTH = moment().subtract(1, 'month').startOf('month');

const isToday = (momentDate) => {
  return momentDate.isSame(TODAY, 'd');
}
const isYesterday = (momentDate) => {
  return momentDate.isSame(YESTERDAY, 'd');
}
const isThisWeek = (momentDate) => {
  return momentDate.isSameOrAfter(THIS_WEEK);
}
const isLastWeek = (momentDate) => {
  return momentDate.isSameOrAfter(LAST_WEEK);
}
const isThisMonth = (momentDate) => {
  return momentDate.isSameOrAfter(THIS_MONTH);
}
const isLastMonth = (momentDate) => {
  return momentDate.isSameOrAfter(LAST_MONTH);
}

var dateCategoryChecker = {
  "Today": false,
  "Yesterday": false,
  "This Week": false,
  "Last Week": false,
  "This Month": false,
  "Last Month": false,
}

class ReviewTable extends Component {
  render() {
    // loading, no result, error handling
    if (this.props.isLoading || this.props.reviews === undefined){
      return <Segment>
              <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
              </Dimmer>

              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
             </Segment>
    } else if(this.props.reviews.length === 0){
      return <Segment>
              No result.
             </Segment>
    } else if (this.props.hasError){
      return <Segment>
              Error from server. Please try again.
             </Segment>
    }

    // parsing and sorting reviews based on increasing time spans
    var reviews = [];
    this.props.reviews.forEach((review) => {
      var dateTime = review.date.split('T');
      review.day = dateTime[0];
      review.time = dateTime[1];
      review.stars = parseInt(review.stars, 0);
      reviews.push(review);
    })
    reviews= _.sortBy(reviews, ['day', 'time']).reverse();



    var rows = [];
    const addDateCategory = (dateCategory) => {
      if (!dateCategoryChecker[dateCategory]){
        rows.push(<DateCategoryRow date={dateCategory} key={dateCategory}/>);
        dateCategoryChecker[dateCategory] = true;
      }
    }

    var lastDateFormat;
    reviews.forEach((review) => {
      const reviewDay = moment(review.day);

      if (isToday(reviewDay)){
        addDateCategory("Today");
      } else if (isYesterday(reviewDay)){
        addDateCategory("Yesterday");
      } else if (isThisWeek(reviewDay)){
        addDateCategory("This Week");
      } else if (isLastWeek(reviewDay)){
        addDateCategory("Last Week");
      } else if (isThisMonth(reviewDay)){
        addDateCategory("This Month");
      } else if (isLastMonth(reviewDay)){
        addDateCategory("Last Month");
      } else{
        const dateFormat = reviewDay.format("MMM YYYY");
        // add new date category 
        if (dateFormat !== lastDateFormat){
          rows.push(<DateCategoryRow date={dateFormat} key={dateFormat}/>);
          lastDateFormat = dateFormat;
        }
      }
      rows.push(<ReviewCard review={review} key={review.id}/>);
    });

    return (
      <div>
        <div className='ReviewCountHeader'>
          <Header as='h3' floated='left'>Showing {this.props.reviews.length} reviews of {this.props.totalReviewsCount}</Header>
        </div>
        <br />
        <div>
          {rows}
        </div>
        <br />
        <Button 
          color='teal'
          fluid
          onClick={this.props.loadMoreReviews} >
          Load More Reviews
        </Button>
      </div>
    );
  }
}

export default ReviewTable;