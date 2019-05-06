import React from 'react';
import { Form, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import SocialButton from '../components/SocialMediaButton';
import AuthButton from '../components/Button';

const Body = styled.div`
  margin: 0px 50px;
  padding-top: 200px;
  display: flex;
  font-family: "Nunito", sans-serif;
  min-height: 100%;
  flex-direction: column;
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
              <Form.Input size='big' fluid icon='envelope outline' iconPosition='left' placeholder='E-mail address' />
              <Form.Input size='big' fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
              {/* <p>Forgot password? <a href='#'>Reset here</a></p> */}
              <Header as='h4'><p>Forgot password? <a href='#'>Reset here</a></p></Header>
              <AuthButton />
          </Form>
          <Space>
            <Grid centered>
              <Header as='h3' textAlign='center'>Don't have an account yet? <a href='#'>Create One</a></Header>
            </Grid>
          </Space>
        </Grid.Column>
      </Wrap>
    </Grid>
  </Body>
);

export default Login;
