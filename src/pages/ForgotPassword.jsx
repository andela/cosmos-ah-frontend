import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validator from 'validator';
import { connect } from 'react-redux';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { forgotPasswordAction } from '../state/password/actions';
import { FormStyle, InputField } from '../components/PasswordReset/Form';
import {
  Center, ContainerStyle, HeaderStyle, AlignRight
} from '../components/PasswordReset/PasswordResetPageStyle';
import logo from '../assets/images/logo.png';


const ForgotPassword = props => {
  const { forgotPasswordState } = props;
  const [formInput, setFormInput] = useState({
    email: ''
  });

  const [error, setError] = useState([]);

  const validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'The email format is invalid';
    return errors;
  };


  const { email } = formInput;

  const handleSubmit = async event => {
    event.preventDefault();
    const validateFormField = await validate(formInput);
    if (Object.keys(validateFormField).length > 0) {
      setError(() => ({ ...validateFormField }));
    } else {
      setError(() => ([]));
      props.forgotPasswordAction(email, props.history);
      setFormInput({ email: '' });
    }
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
    setError(() => (''));
    props.forgotPasswordState.error = '';
  };

  const messageClass = [props.forgotPasswordState.error || error.email ? 'text-error' : 'text-success'];
  return (
    <ContainerStyle>
      <Center>
        <AltLogo logo={logo}/>
      </Center>
      <HeaderStyle>
        <h1>Reset Password</h1>
      </HeaderStyle>
      <h4>Enter Your Email Address And We Will Email You With Instructions</h4>
      <FormStyle onSubmit={handleSubmit} loading={forgotPasswordState.loadingState}>
        <InputField
          fluid
          error={!!error.email}
          size='big'
          icon={{ name: 'envelope', color: 'blue' }}
          iconPosition='left'
          placeholder='YOUR EMAIL ADDRESS'
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          required={true} />
        {(props.forgotPasswordState.message || props.forgotPasswordState.error || error.email) && (
          <div className={messageClass.join(' ')}>
            {props.forgotPasswordState.message && <p>{props.forgotPasswordState.message.data}</p>}
            {error.email && <p>{error.email}</p>}
            {props.forgotPasswordState.error && <p>{props.forgotPasswordState.error}</p>}
          </div>
        )}
        <ButtonComponent type='submit' size='big' color='blue'>RESET PASSWORD</ButtonComponent>
      </FormStyle>
      <AlignRight><Link to='/login'>Back to Sign In</Link></AlignRight>
    </ContainerStyle>
  );
};
const mapStateToProps = state => ({ forgotPasswordState: state.userPassword.forgotPassword });


export default connect(mapStateToProps, { forgotPasswordAction })(ForgotPassword);
