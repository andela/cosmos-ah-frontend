import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import appLogo from '../assets/images/logo.png';


const Center = styled.div`
  text-align: center;
`;

const ContainerStyle = styled.div`
  margin: 0 auto;
  margin-top: 10%;
  width: 40%;
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 770px) and (max-width: 1115px) {
    width: 70%;
  }
`;

const HeaderStyle = styled.div`
  margin-top: 100px;
  h1 {
    letter-spacing: 2px;
    color: #484949;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 23px;
    }
  }
  @media (min-width: 770px) and (max-width: 1115px) {
    h1 {
      font-size: 20px;
    }
  }`;

const FormStyle = styled(Form)`
  margin: 0 auto;
  &&& {
    input {
      background-color: #E8E8E8 !important;
      border: none !important;
    }
  }
`;

const AlignRight = styled.p`
  text-align: right;
  font-size: 17px;
  padding: 5px 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ForgotPassword = () => (


  <ContainerStyle>
    <Center>
      <AltLogo logo={appLogo} />
    </Center>
    <HeaderStyle>
      <h1>Forgot Password</h1>
    </HeaderStyle>
    <h4>Enter Your Email Address And We Will Email You With Instructions</h4>
    <FormStyle data-testid='forgotPassword'>
      <Form.Input size='big' icon={{ name: 'envelope', color: 'blue' }} iconPosition='left' fluid placeholder='YOUR EMAIL ADDRESS' />
      <ButtonComponent type='submit' size='big' color='blue'>RESET PASSWORD</ButtonComponent>
    </FormStyle>
    <AlignRight><Link to='/login'>Back to Login</Link></AlignRight>
  </ContainerStyle>
);

export default ForgotPassword;
