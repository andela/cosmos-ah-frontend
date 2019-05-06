import React, { useState } from 'react';
import { Form, Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register } from '../state/auth/actions';

const SignUpForm = props => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    submitted: false,
  });
  const handleSubmit = e => {
    e.preventDefault();
    setState({ ...state, submitted: true });
    const { confirmPassword, submitted, ...user } = state;
    const { dispatch } = props;
    if (user.fullName && user.email && user.username && user.password) {
      dispatch(register(user));
    }
  };
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const {
    fullName, email, username, password, confirmPassword
  } = state;
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>OTHER PAGE</Grid.Column>
          <Grid.Column width={8}>
            <Form size="small" onSubmit={handleSubmit}>
              <Form.Input
                type="text"
                label="Full name"
                placeholder="Full Name"
                icon="user"
                onChange={handleChange}
                value={fullName}
                name="fullName"
              />
              <Form.Input
                type="text"
                label="Email"
                placeholder="Email"
                icon="mail"
                onChange={handleChange}
                value={email}
                name="email"
              />
              <Form.Input
                type="text"
                label="Username"
                placeholder="Username"
                icon="user"
                onChange={handleChange}
                value={username}
                name="username"
              />
              <Form.Input
                type="password"
                label="Password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                name="password"
              />
              <Form.Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={confirmPassword}
                name="confirmPassword"
              />
              <Form.Checkbox label="Enable Email Notification about Article" />
              <Form.Group with="">
                <Form.Button>Sign Up</Form.Button>
                <Form.Button>Sign in</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => ({
  registering: state.registering,
});

export default connect(mapStateToProps)(SignUpForm);
