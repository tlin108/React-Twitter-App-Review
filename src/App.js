import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

import LogoHeader from './components/LogoHeader';
import SearchBar from './components/searchBar';
import ReviewTable from './components/FilterableReviewTable/ReviewTable';

import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      filterText: '' 
    }
    this.fetchData = this.fetchData.bind(this);
  }

  loadData(input) {
    fetch("http://exercises.appfigures.com/reviews?q=")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
        });
      });
  }

  fetchData(input){
    axios.get('http://exercises.appfigures.com/reviews?q=' + input)
      .then((response) => {
        console.log(input);
        this.setState({
          filterText: input,
          data: response.data.reviews
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData(''); // empty query first on first mount you could change this
  }

  render() {
    return (
      <Container className="App">
        <LogoHeader />
        <SearchBar filterText={this.state.filterText} search={this.fetchData}/>
        <br />
        <ReviewTable 
          reviews={this.state.data}
          filterText={this.state.filterText}
        /> 
      </Container>
    );
  }
}
