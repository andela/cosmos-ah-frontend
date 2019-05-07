import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const IconStyle = styled.div`
  margin: 25px 0;
`;
const socialAuth = type => {
  try {
    window.location.href = `https://author-haven-stage.herokuapp.com/api/v1/auth/${type}`;
  } catch (error) {
    throw error;
  }
};
const SocialButton = ({ children }) => (
  <Grid.Column mobile={3} tablet={2} computer={1}>
    {children}
  </Grid.Column>
);


const Icon = () => (
  <IconStyle>
    <Grid textAlign='center'>
      <SocialButton>
        <Button basic color='blue' size='massive' circular icon='facebook' onClick={() => socialAuth('facebook')}/>
      </SocialButton>
      <SocialButton >
        <Button basic color='blue' size='massive' circular icon='twitter' onClick={() => socialAuth('twitter')}/>
      </SocialButton>
      <SocialButton >
        <Button basic color='red' size='massive' circular icon='google plus' onClick={() => socialAuth('google')}/>
      </SocialButton>
      <SocialButton >
        <Button basic color='blue' size='massive' circular icon='linkedin' onClick={() => socialAuth('linkedin')}/>
      </SocialButton>
    </Grid>
  </IconStyle >
);

export default Icon;
