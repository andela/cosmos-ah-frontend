import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialMediaButton from '../components/SocialMediaButton';
import { register } from '../state/auth/action';
import InlineError from '../components/InlineError';
import { validateSignupInput, validateProperty } from '../utils/userValidator';
import appLogo from '../assets/images/inverted-logo.png';
import AppLogo from '../components/AppLogo';

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
  margin-bottom: 65%;
  color: #ffffff;
  padding: 15px;
  @media (min-width: 769px) and (max-width: 907px) {
    margin-bottom: auto;
  }
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
    userData: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      notification: false,
    },
    errors: {},
    isValid: false,
  });
  useEffect(() => {
    if (props.auth.registered === true) {
      props.history.push('/feeds');
    }
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const { errors, isValid } = await validateSignupInput(formData.userData);
    setFormData({ ...formData, errors, isValid });
    if (Object.keys(errors).length === 0) {
      const { confirmPassword, ...user } = formData.userData;
      props.register(user);
    }
  };
  const handleChange = ({ currentTarget: input }, e) => {
    const errors = { ...formData.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const userData = { ...formData.userData };
    if (e.type === 'checkbox') {
      userData.notification = e.checked;
    } else {
      userData[input.name] = input.value;
    }
    setFormData({
      ...formData,
      userData,
      errors,
    });
  };

  const {
    fullName, email, username, password, confirmPassword
  } = formData.userData;
  const { errors } = formData;
  const { message } = props.alert;
  return (
    <Container>
      <Background>
        <Header>
          <div>
            <Link to="/">
              <AppLogo logo={appLogo} />
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
            onSubmit={handleSubmit}
            loading={props.auth.registering}
          >
            {props.alert.error && <Message negative>{message}</Message>}
            {errors.fullName && <InlineError text={errors.fullName} />}
            <Form.Input
              icon={{ name: 'user', color: 'blue' }}
              iconPosition="left"
              placeholder="Full Name"
              value={fullName}
              name="fullName"
              onChange={handleChange}
              error={!!errors.fullName}
            />
            {errors.username && <InlineError text={errors.username} />}
            <Form.Input
              icon={{ name: 'user', color: 'blue' }}
              iconPosition="left"
              placeholder="Username"
              value={username}
              name="username"
              onChange={handleChange}
              error={!!errors.username}
            />
            {errors.email && <InlineError text={errors.email} />}
            <Form.Input
              icon={{ name: 'mail', color: 'blue' }}
              iconPosition="left"
              placeholder="Email Address"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              error={!!errors.email}
            />
            {errors.password && <InlineError text={errors.password} />}
            <Form.Input
              icon={{ name: 'lock', color: 'blue' }}
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              error={!!errors.password}
            />
            {errors.confirmPassword && <InlineError text={errors.confirmPassword} />}
            <Form.Input
              icon={{ name: 'lock', color: 'blue' }}
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              error={!!errors.confirmPassword}
            />
            <Form.Checkbox
              label="Enable Email Notifications About Product And Services."
              onChange={handleChange}
              name="notification"
            />
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
              &copy;2019 All Right Reserved.
            </p>
          </div>
        </TermsStyle>
      </div>
    </Container>
  );
};

Register.prototype = {
  auth: PropTypes.object,
  alert: PropTypes.object,
  register: PropTypes.func,
};
const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert,
});

export const ConnectedRegister = connect(
  mapStateToProps,
  { register },
)(Register);
