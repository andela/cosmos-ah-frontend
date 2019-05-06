import React from 'react';
import { Form, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import SocialButton from '../components/SocialMediaButton';
import AuthButton from '../components/Button';

const Body = styled.div`
  margin: 100px;
  fontFamily: Nunito;
`;

const Wrap = styled.div`
  max-width: 450px;
`;

const Space = styled.div`
  margin: 20px;
`;

const Login = () => (
  <Body>
    <Grid textAlign='center'>
      <Wrap>
        <Grid.Column>
          <Header as='h1' color='blue' textAlign='center'>Login</Header>
          <SocialButton />
          <Form>
              <Form.Input fluid icon='envelope outline' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
              <p>Forgot password? <a href='#'>Reset here</a></p>
              <AuthButton />
          </Form>
          <Space>
            <Grid centered>
              <h4>Don't have an account yet? <a href='#'>Create One</a></h4>
            </Grid>
          </Space>
        </Grid.Column>
      </Wrap>
    </Grid>
  </Body>
);

export default Login;
