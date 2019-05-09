import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import twitter from '../assets/images/svgs/twitter.svg';
import facebook from '../assets/images/svgs/facebook.svg';
import linkedin from '../assets/images/svgs/linkedin.svg';
import google from '../assets/images/svgs/google-plus.svg';

const Space = styled.div`
  margin: 30px;
  img {
    height: 20px;
    width: 35px;
  }
  @media (max-width: 400px) {
    margin: 30px 10px;
  }
  
`;

const SocialButton = () => (
  <Space>
    <Grid centered>
      <Button basic circular color='blue' size='massive'><img src={facebook} /></Button>
      <Button basic circular color='red' size='massive'><img src={google} /></Button>
      <Button basic circular color='blue' size='massive'><img src={twitter} /></Button>
      <Button basic circular color='blue' size='massive'><img src={linkedin} /></Button>
    </Grid>
  </Space>
);

export default SocialButton;
