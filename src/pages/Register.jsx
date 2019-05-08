import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import SocialMediaButton from '../components/SocialMediaButton';


const Center = styled.div`
  text-align: center;
`;

const TermsStyle = styled(Center)`
  color: #9B9B9B;
  padding-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #FFFFFF;
  height: 100vh;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MyButton = styled(Button)`
  &&& {
    background: ${props => (props.primary ? '#3A8FDD' : '#FFFFFF')};
    color: ${props => (props.primary ? '#FFFFFF' : 'grey')};
    width: ${props => (props.primary ? '40%' : '')};
    border-radius: 5px;
    border: none;
    margin: 10px;
    padding: 8px 0px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const Aside = styled(Center)`
  margin-bottom: auto;
  color: #FFFFFF;
  padding: 35px;
`;

const ContainerCenter = styled(Center)`
  color: #3A8FDD;
  font-size: 18px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Background = styled.div`
  background-image: url('https://res.cloudinary.com/drmrayjr0/image/upload/v1556869811/bg1_fskesq.png');
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FormInput = styled(Form)`
  &&& {
    width: 30%;
  }
  input {
    background-color: #E8E8E8 !important;
    border-radius: 10px !important;
    border: none !important;
  }
  label {
    color: #3A8FDD !important;
    }
  }
  @media screen and (max-width: 768px) {
    &&& {
      width: 90%;
    }
  }
  @media (min-width: 769px) and (max-width: 907px) {
    &&& {
      width: 50%;
    }
  }
`;
const FormContainer = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  margin-top: 50px;
  margin-bottom: auto;
  h1 {
    font-size: 40px;
  }
  img {
    margin-left: 35px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Register = () => (
  <Container>
    <Background>
      <Header>
        <div>
          <a href='/'><img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1556992917/Screenshot_2019-04-18_at_1.45.17_PM_aurl4d.png' width={150} /></a>
        </div>
      </Header>
      <Aside>
        <h2>"Character is like a tree and reputation is like shadow.
        The shadow is what we think of it; the tree is the real thing."</h2>
        <h3>Abraham Lincoln</h3>
      </Aside>
    </Background>
    <div>
      <ContainerCenter>
        <Header>
          <h1>Create Your Account</h1>
        </Header>
        <SocialMediaButton />
        <p>or register using your email address</p>
      </ContainerCenter>
      <FormContainer>
        <FormInput data-testid='registerForm'>
            <Form.Input icon={{ name: 'user', color: 'blue' }} iconPosition='left' placeholder='Full Name' />
            <Form.Input icon={{ name: 'user', color: 'blue' }} iconPosition='left' placeholder='Username' />
            <Form.Input icon={{ name: 'mail', color: 'blue' }} iconPosition='left' placeholder='Email Address' type='email' />
            <Form.Input icon={{ name: 'lock', color: 'blue' }} iconPosition='left' placeholder='Password' type='password' />
            <Form.Input icon={{ name: 'lock', color: 'blue' }} iconPosition='left' placeholder='Confirm Password' type='password' />
            <Form.Checkbox label='Enable Email Notifications About Product And Services.' />
            <Center>
              <MyButton primary>Sign Up</MyButton> Or <MyButton>Sign In</MyButton>
            </Center>
        </FormInput>
      </FormContainer>
      <TermsStyle>
        <div>
          <p>By signing up, you agree to Authors Haven
            <br />
            Terms and Conditions and Privacy Policy
          <br />
            &copy;2019 All Right Reserved.</p>
        </div>
      </TermsStyle>
    </div>
  </Container>
);

export default Register;
