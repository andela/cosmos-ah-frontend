import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import SocialMediaButton from '../components/SocialMediaButton';
import { register } from '../state/auth/action';

const Center = styled.div`
  text-align: center;
`;

const TermsStyle = styled(Center)`
  color: #9b9b9b;
  padding-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #ffffff;
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
  color: #ffffff;
  padding: 35px;
`;

const ContainerCenter = styled(Center)`
  color: #3a8fdd;
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

export const Register = props => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    submitted: false,
  });
  const handelSubmit = e => {
    e.preventDefault();
    setFormData({ ...formData, submitted: true });
    const { confirmPassword, submitted, ...user } = formData;
    const { dispatch } = props;
    dispatch(register(user));
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {
    fullName,
    email,
    username,
    password,
    confirmPassword,
    submitted,
  } = formData;
  return (
    <Container>
      <Background>
        <Header>
          <div>
            <Link to="/">
              <img src="../assets/images/inverted-logo.png" width="150px" />
            </Link>
          </div>
        </Header>
        <Aside>
          <h2>
            "Character is like a tree and reputation is like shadow. The shadow is what we think of
            it; the tree is the real thing."
          </h2>
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
          <FormInput
            data-testid="registerForm"
            onSubmit={handelSubmit}
            loading={props.auth.registering}
          >
            <Message negative={props.alert.error} hidden={!props.alert.error}>
              <p>{props.alert.message}</p>
            </Message>
            <Form.Input
              icon={{ name: 'user', color: 'blue' }}
              iconPosition="left"
              placeholder="Full Name"
              value={fullName}
              name="fullName"
              onChange={handleChange}
            />
            <Form.Input
              icon={{ name: 'user', color: 'blue' }}
              iconPosition="left"
              placeholder="Username"
              value={username}
              name="username"
              onChange={handleChange}
            />
            <Form.Input
              icon={{ name: 'mail', color: 'blue' }}
              iconPosition="left"
              placeholder="Email Address"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <Form.Input
              icon={{ name: 'lock', color: 'blue' }}
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <Form.Input
              icon={{ name: 'lock', color: 'blue' }}
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
            <Form.Checkbox label="Enable Email Notifications About Product And Services." />
            <Center>
              <MyButton primary>Sign Up</MyButton> Or{' '}
              <Link to="/login">
                <MyButton>Sign In</MyButton>
              </Link>
            </Center>
          </FormInput>
        </FormContainer>
        <TermsStyle>
          <div>
            <p>
              By signing up, you agree to Authors Haven
              <br />
              Terms and Conditions and Privacy Policy
              <br />
              &copy;2019 All Right Reserved.
            </p>
          </div>
        </TermsStyle>
      </div>
    </Container>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert,
});
export default connect(mapStateToProps)(Register);
