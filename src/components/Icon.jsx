import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const IconStyle = styled.div`
  margin: 25px 0;
`;

const Icon = () => (
  <IconStyle>
    <Grid textAlign='center'>
      <Grid.Column mobile={3} tablet={2} computer={1}>
        <Button basic color='blue' size='massive' circular icon='facebook' />
      </Grid.Column>
      <Grid.Column mobile={3} tablet={2} computer={1}>
        <Button basic color='blue' size='massive' circular icon='twitter' />
      </Grid.Column>
      <Grid.Column mobile={3} tablet={2} computer={1}>
        <Button basic color='red' size='massive' circular icon='google plus' />
      </Grid.Column>
      <Grid.Column mobile={3} tablet={2} computer={1}>
        <Button basic color='blue' size='massive' circular icon='linkedin' />
      </Grid.Column>
    </Grid>
  </IconStyle>
);

export default Icon;
