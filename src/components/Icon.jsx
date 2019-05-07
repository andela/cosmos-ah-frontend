import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const IconStyle = styled.div`
  margin: 25px 0;
`;

const SocialButton = ({ children }) => (
  <Grid.Column mobile={3} tablet={2} computer={1}>
    {children}
  </Grid.Column>
);

const Icon = () => (
  <IconStyle>
    <Grid textAlign='center'>
      <SocialButton>
        <Button basic color='blue' size='massive' circular icon='facebook' />
      </SocialButton>
      <SocialButton>
        <Button basic color='blue' size='massive' circular icon='twitter' />
      </SocialButton>
      <SocialButton>
        <Button basic color='red' size='massive' circular icon='google plus' />
      </SocialButton>
      <SocialButton>
        <Button basic color='blue' size='massive' circular icon='linkedin' />
      </SocialButton>
    </Grid>
  </IconStyle >
);

export default Icon;
