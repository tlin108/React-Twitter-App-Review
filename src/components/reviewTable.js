import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import ReviewDateRow from './ReviewTable/reviewDateRow';
import ReviewCard from './ReviewTable/reviewCard';

import _ from 'lodash';
import moment from 'moment';

moment.updateLocale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s:  "Today",
        m:  "Today",
        mm: "Today",
        h:  "Today",
        hh: "Today",
        d:  "Yesterday",
        dd: function(number, withoutSuffix, key, isFuture){
          if (number === 2){
            return "Yesterday";
          } else{
            return number - 1 + " days ago";
          }
        },
        M:  "A month ago",
        MM: "%d months ago",
        y:  "A year ago",
        yy: "%d years ago"
    }
});

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
    reviews= _.sortBy(reviews, ['day', 'time']).reverse();

    var rows = [];
    var lastDateCategory = null;
    var createdCategory = {
      thisWeek: false,
      pastWeek: false,
      thisMonth: false
    }

    reviews.forEach(function(review) {
      const reviewDay = moment(review.day).fromNow(true);

      if (reviewDay !== lastDateCategory) {
        rows.push(<ReviewDateRow date={reviewDay} key={reviewDay} />);
      }
      /*
      else if ((reviewDay.split(' ')[0] <= (moment().startOf('isoWeek').fromNow(true)).split(' ')[0])){
        if(!createdCategory['thisWeek']){
          rows.push(<ReviewDateRow date={'This Week'} key={'This Week'} />);
          createdCategory['thisWeek'] = true;
        }
      }
      else if ((reviewDay.split(' ')[0] <= (moment().add(1, 'weeks').fromNow(true)).split(' ')[0])){
        if(!createdCategory['pastWeek']){
          rows.push(<ReviewDateRow date={'Past Week'} key={'Past Week'} />);
          createdCategory['pastWeek'] = true;
        }
      }
      */
      rows.push(<ReviewCard review={review} key={review.id} />);
      lastDateCategory = reviewDay;
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}