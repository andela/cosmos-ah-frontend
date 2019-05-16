import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { forgotPasswordAction } from '../state/password/actions';
import { FormStyle, InputField } from '../components/PasswordReset/Form';
import {
  Center, ContainerStyle, HeaderStyle, AlignRight
} from '../components/PasswordReset/PasswordResetPageStyle';


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


  const messageClass = [props.forgotPasswordState.error ? 'text-error' : 'text-success'];
  return (
    <ContainerStyle>
      <Center>
        <AltLogo />
      </Center>
      <HeaderStyle>
        <h1>Reset Password</h1>
      </HeaderStyle>
      <h4>Enter Your Email Address And We Will Email You With Instructions</h4>
      <FormStyle onSubmit={handleSubmit} loading={forgotPasswordState.loadingState}>
        <InputField
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
        {(props.forgotPasswordState.message || props.forgotPasswordState.error) && (
          <div className={messageClass.join(' ')}>
            {
              props.forgotPasswordState.message
              && <p>{props.forgotPasswordState.message.data}</p>
            }
            {
              props.forgotPasswordState.error
              && <p>{props.forgotPasswordState.error}</p>
            }
          </div>
        )}
        <ButtonComponent type='submit' size='big' color='blue'>RESET PASSWORD</ButtonComponent>
      </FormStyle>
      <AlignRight><Link to='/login'>Back to Login</Link></AlignRight>
    </ContainerStyle>
  );
};
const mapStateToProps = state => ({ forgotPasswordState: state.userPassword.forgotPassword });


export default connect(mapStateToProps, { forgotPasswordAction })(ForgotPassword);
