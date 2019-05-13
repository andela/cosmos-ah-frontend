import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { forgotPasswordAction } from '../state/password/actions';


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

const ForgotPassword = props => {
  const { forgotPasswordState } = props;
  const [formInput, setFormInput] = useState({
    email: ''
  });


  const { email } = formInput;

  const handleSubmit = event => {
    event.preventDefault();
    props.forgotPasswordAction(email);
    setFormInput({ email: '' });
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
  };


  return (
    <ContainerStyle>
      <Center>
        <AltLogo />
      </Center>
      <HeaderStyle>
        <h1>Forgot Password</h1>
      </HeaderStyle>
      <h4>Enter Your Email Address And We Will Email You With Instructions</h4>
      {props.forgotPasswordState.message && (
        <Message success>
          {
            props.forgotPasswordState.message.data
            && <p>{props.forgotPasswordState.message.data}</p>
          }
        </Message>
      )}
      <FormStyle onSubmit={handleSubmit} loading={forgotPasswordState.loadingState} data-testid='forgotPassword'>
        <Form.Input
          fluid
          size='big'
          icon={{ name: 'envelope', color: 'blue' }}
          iconPosition='left'
          placeholder='YOUR EMAIL ADDRESS'
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          required={true} />
        <ButtonComponent type='submit' size='big' color='blue'>RESET PASSWORD</ButtonComponent>
        {props.forgotPasswordState.error === 'Account associated with this email cannot be found' && (
          <Message negative>
            {
              props.forgotPasswordState.error
              && <p>{props.forgotPasswordState.error}</p>
            }
          </Message>
        )}
      </FormStyle>
      <AlignRight><Link to='/login'>Back to Login</Link></AlignRight>
    </ContainerStyle>
  );
};
function mapStateToProps(state) {
  return { forgotPasswordState: state.forgotPassword.forgotPassword };
}


export default connect(mapStateToProps, { forgotPasswordAction })(ForgotPassword);
