import React from 'react';
import { Form, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import SocialButton from '../components/SocialMediaButton';
import { ButtonComponent } from '../components/Button';

const Body = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: #333;
`;

const Logo = styled.div`
  margin: 25px;
  @media (max-width: 540px) {
    text-align: center;
    img {
      width: 100px;
    }
  }
`;

const Wrap = styled.div`
width: 500px;
&&& {
  input {
    background-color: #E8E8E8 !important;
    border-radius: 10px !important;
    border: none !important;
  }
  label {
    color: #3A8FDD !important;
    }
}
  @media (max-width: 500px) {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const Space = styled.div`
  margin: 20px;
`;

const StyledLink = styled.p`
  text-align: right;
`;

const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Login = () => (
  <Body>
    <Logo>
      <a href='/'><img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1557246832/Screenshot_2019-05-07_at_5.33.23_PM_p7frml.png' width={150} /></a>
    </Logo>
    <Center>
      <Wrap>
        <Grid.Column>
          <Center>
            <Header as='h1' color='blue' size='huge'>Login</Header>
          </Center>
          <SocialButton />
          <Header color='blue'>
            <h4>or login using your email address</h4>
          </Header>
          <Form>
              <Form.Input size='big' icon={{ name: 'envelope outline', color: 'blue' }} iconPosition='left' placeholder='Email Address' />
              <Form.Input size='big' icon={{ name: 'lock', color: 'blue' }} iconPosition='left' placeholder='Password' type='password'/>
              <StyledLink><a href='#'>Forgot password?</a></StyledLink>
              <ButtonComponent color='blue' size='big'>
                Continue
              </ButtonComponent>
          </Form>
          <Space>
            <Grid centered>
            <Center>
              <Header>
                <h3>Don't have an account yet? <a href='#'>Create One</a></h3>
            </Header>
            </Center>
            </Grid>
          </Space>
        </Grid.Column>
      </Wrap>
    </Center>
  </Body>
);

export default Login;
