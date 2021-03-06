import React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

function LogoHeader() {
  return (
    <Container className='Banner'>
      <Grid>
        <Grid.Column width={2}>
          <Image src='http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png' />
        </Grid.Column>
        <Grid.Column verticalAlign='middle' width={8}>
          <Header as='h1'>Reviews for Twitter</Header>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default LogoHeader;