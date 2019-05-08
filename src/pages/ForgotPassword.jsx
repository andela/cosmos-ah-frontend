import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ForgotPassword = () => (
  <div>
    <div>
      <a href='/'><img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1556992917/Screenshot_2019-04-18_at_1.45.17_PM_aurl4d.png' width={150} /></a>
    </div>
    <h1>Reset Password</h1>
    <p>Enter Your Email Address And We Will Email You With Instructions</p>
    <Form data-testid='forgotPassword'>
      <Form.Input fluid placeholder='YOUR EMAIL ADDRESS' />
      <Button fluid primary>RESET PASSWORD</Button>
    </Form>
    <p>Back to Login</p>
  </div>
);

export default ForgotPassword;
