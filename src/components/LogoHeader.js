import React, { Component } from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

export default class LogoHeader extends Component {
  render() {
    return (
      <Container className='Banner'>
        <Grid centered>
          <Grid.Column width={2}>
            <Image src='http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png' />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h1'>Reviews for Twitter</Header>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}