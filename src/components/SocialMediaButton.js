import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const Space = styled.div`
  margin: 30px;
  @media (max-width: 400px) {
    margin: 30px 10px;
  }
  
`;

const SocialButton = () => (
  <Space>
    <Grid centered>
      <Button basic circular color='blue' size='massive' icon='facebook' />
      <Button basic circular color='red' size='massive' icon='google plus' />
      <Button basic circular color='blue' size='massive' icon='twitter' />
      <Button basic circular color='blue' size='massive' icon='linkedin' />
    </Grid>
  </Space>
);

export default SocialButton;
