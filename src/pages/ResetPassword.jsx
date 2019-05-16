import React, { useState } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { resetPasswordAction } from '../state/password/actions';
import { FormStyle, InputField } from '../components/PasswordReset/Form';
import { Center, ContainerStyle } from '../components/PasswordReset/PasswordResetPageStyle';

const ResetPassword = props => {
  const { resetPasswordState } = props;
  const [formInput, setFormInput] = useState({
    password: '',
    password_confirmation: ''
  });


  const { password, confirmPassword } = formInput;
  const values = queryString.parse(props.location.search);

  const hidePassword = e => {
    e.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.resetPasswordAction(formInput, values.resetToken, props.history);
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
  };

  const messageClass = [props.resetPasswordState.error ? 'text-error' : 'text-success'];
  return (
    <ContainerStyle>
      <Center>
        <AltLogo />
      </Center>
      <FormStyle onSubmit={handleSubmit} loading={resetPasswordState.loadingState}>
        <InputField
          fluid
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Enter Your New Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          required={true}
          actionIcon='eye'
          onClick={hidePassword} />
        <InputField
          fluid
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Confirm Your Password'
          type='password'
          name='password_confirmation'
          onChange={handleChange}
          value={confirmPassword}
          required={true}
          actionIcon='eye'
          onClick={hidePassword} />
        <ButtonComponent type='submit' size='big' color='blue'>RESET PASSWORD</ButtonComponent>
      </FormStyle>
    </ContainerStyle>
  );
};
const mapStateToProps = state => ({ resetPasswordState: state.userPassword.resetPassword });


export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);
