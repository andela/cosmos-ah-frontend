import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Grid, Header, Message
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SocialButton from '../components/SocialMediaButton';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { loginAction } from '../state/auth/action';
import InlineError from '../components/InlineError';
import logo from '../assets/images/logo.png';

const Body = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: #333;
`;

const Logo = styled.div`
  margin: 25px;
  @media (max-width: 540px) {
    text-align: center;
    img {
      width: 100px;
    }
  }
`;

const Wrap = styled.div`
width: 500px;
&&& {
  input {
    background-color: #E8E8E8 !important;
    border-radius: 10px !important;
    border: none !important;
  }
  label {
    color: #3A8FDD !important;
    }
}
  @media (max-width: 500px) {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const Space = styled.div`
  margin: 20px;
`;

const StyledLink = styled.p`
  text-align: right;
`;

const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Login = props => {
  const { loginState } = props;

  const transformObjectValToArray = obj => {
    let data = [];
    if (obj) {
      data = [...Object.values(obj)];
      return data;
    }
    return data[0];
  };

  const validatorErrors = transformObjectValToArray(loginState.data);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState([]);

  const validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!Validator.isLength(data.password, { min: 6, max: 100 })) errors.password = 'password can not be less than 6 charcters';
    return errors;
  };

  const { email, password } = formData;

  const handleSubmit = async event => {
    event.persist();
    event.preventDefault();
    const validateFormData = await validate(formData);
    if (Object.keys(validateFormData).length > 0) {
      setError(() => ({ ...validateFormData }));
    } else {
      setError(() => ([]));
      props.loginAction({ email, password }, props.history);
    }
  };

  const handleChange = event => {
    event.persist();
    setFormData(() => ({ ...formData, [event.target.name]: event.target.value }));
  };
  return (
  <Body>
    <Logo>
      <AltLogo logo={logo} />
    </Logo>
    <Center>
      <Wrap>
        <Grid.Column>
          <Center>
            <Header as='h1' color='blue' size='huge'>Login</Header>
          </Center>
          <SocialButton />
          <Header color='blue'>
            <h4>or login using your email address</h4>
          </Header>
          <Form onSubmit={handleSubmit} loading={loginState.loadingState}>
            {error.email && <InlineError text={error.email} />}
            <Form.Input size='big' error={!!error.email} icon={{ name: 'envelope outline', color: 'blue' }} iconPosition='left' placeholder='Email Address' name='email' onChange={handleChange} value={email} required={true}/>
            {error.password && <InlineError text={error.password} />}
            <Form.Input size='big' error={!!error.password} icon={{ name: 'lock', color: 'blue' }} iconPosition='left' placeholder='Password' type='password' name='password' onChange={handleChange} value={password} required={true}/>
            {(validatorErrors !== undefined) && (
            <Message negative>
              <p>{validatorErrors}</p>
            </Message>
            )}
            <StyledLink><Link to='/forgot-password'>Forgot password?</Link></StyledLink>
            <ButtonComponent color='blue' size='big'>
              Continue
            </ButtonComponent>
          </Form>
          <Space>
            <Grid centered>
            <Center>
              <Header>
                <h3>Don't have an account yet? <Link to='/signup'>Create One</Link></h3>
            </Header>
            </Center>
            </Grid>
          </Space>
        </Grid.Column>
      </Wrap>
    </Center>
  </Body>
  );
};

const mapStateToProps = state => ({ loginState: state.auth.signin });

Login.propTypes = {
  loginState: PropTypes.object.isRequired
};

export const connectedLogin = connect(mapStateToProps, { loginAction })(Login);
