import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Icon from '../components/Icon';


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

const Container = styled.div`
  font-family: roboto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  margin: 0 auto;
`;

const H1 = styled.div`
  margin-bottom: auto;
  text-align: center;
  color: #FFFFFF;
  padding: 35px;
`;

const Center = styled.div`
  text-align: center;
`;

const ContainerCenter = styled.div`
  text-align: center;
  color: #3A8FDD;
  font-size: 18px;
`;

const Background = styled.div`
  background-image: url('https://res.cloudinary.com/drmrayjr0/image/upload/v1556869811/bg1_fskesq.png');
  display: flex;
  flex-direction: column;
`;

const FormInput = styled(Form)`
  &&& {
    width: 35%;
  }
  input {
    background-color: #e8e8e8 !important;
    border-radius: 10px !important;
    border: none !important;
  }
  label {
    color: #3A8FDD !important;
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
    font-size: 50px;
  }
  img {
    margin-left: 35px;
  }
`;

const Register = () => (
  <Container>
    <Background>
      <Header>
        <div><img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1556992917/Screenshot_2019-04-18_at_1.45.17_PM_aurl4d.png' width={'100px'}/></div>
      </Header>
      <H1>
        <h2>"Character is like a tree and reputation is like shadow.
        The shadow is what we think of it; the tree is the real thing."</h2>
        <h3>Abraham Lincoln</h3>
      </H1>
    </Background>
    <div>
      <ContainerCenter>
        <Header>
          <h1>Create Your Account</h1>
        </Header>
        <Icon />
        <p>or register using your email address</p>
      </ContainerCenter>
      <FormContainer>
        <FormInput>
          <Form.Input icon={{ name: 'user', color: 'blue' }} iconPosition='left' type='text' placeholder='Full Name' type='text' />
          <Form.Input icon={{ name: 'user', color: 'blue' }} iconPosition='left' type='text' placeholder='Username' type='text' />
          <Form.Input icon={{ name: 'mail', color: 'blue' }} iconPosition='left' type='text' placeholder='Email address' type='email' />
          <Form.Input icon={{ name: 'lock', color: 'blue' }} iconPosition='left' type='text' placeholder='Password' type='password' />
          <Form.Input icon={{ name: 'lock', color: 'blue' }} iconPosition='left' type='text' placeholder='Confirm Password' type='password' />
          <Form.Checkbox label='Enable Email Notifications About Product And Services.' />
          <Center>
            <MyButton primary>Sign Up</MyButton> Or <MyButton>Sign In</MyButton>
          </Center>
        </FormInput>
      </FormContainer>
      <Center>
        <div>
          <p>By signing up, you agree to Authors Haven
            <br />
            Terms and Conditions and Privacy Policy
          <br />
            &copy;2019 All Right Reserved.</p>
        </div>
      </Center>
    </div>
  </Container>
);

export default Register;
