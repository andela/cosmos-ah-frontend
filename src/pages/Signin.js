import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Container
} from 'semantic-ui-react';
import styled from 'styled-components';

const bodyStyle = {
  margin: '0',
  backgroundColor: 'FFFFFF',
  fontFamily: 'Nunito'
};

class Login extends Component {
  render() {
    return (
    <div style={bodyStyle} className='loginForm'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' color='blue' textAlign='center'>
            Login
          </Header>
          <Form>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
              <Grid style={{ margin: '20px' }} centered>
                <Button color='blue' size='large'>Login</Button>
              </Grid>
          </Form>
          <Grid style={{ margin: '20px' }} centered>
            <h4>
              Don't have an account yet? <a href='#'>Create One</a>
            </h4>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

export default Login;
