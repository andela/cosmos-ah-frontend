import React, { useState } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { ButtonComponent } from '../components/Button';
import AltLogo from '../components/AppLogo';
import { resetPasswordAction } from '../state/password/actions';
import { FormStyle, InputField } from '../components/PasswordReset/Form';
import { Center, ContainerStyle, HeaderStyle } from '../components/PasswordReset/PasswordResetPageStyle';

const ResetPassword = props => {
  const { resetPasswordState } = props;
  const [formInput, setFormInput] = useState({
    password: '',
    password_confirmation: '',
  });

  const [passwordType, setPasswordType] = useState({
    show: true
  });

  const { password, confirmPassword } = formInput;
  const values = queryString.parse(props.location.search);

  const hidePassword = e => {
    e.preventDefault();
    setPasswordType(() => ({ show: !passwordType.show }));
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

  return (
    <ContainerStyle>
      <Center>
        <AltLogo />
      </Center>
      <HeaderStyle>
        <h1>Reset Password</h1>
      </HeaderStyle>
      <FormStyle onSubmit={handleSubmit} loading={resetPasswordState.loadingState}>
        <InputField
          fluid
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Enter Your New Password'
          type={ passwordType.show ? 'password' : 'text' }
          name='password'
          onChange={handleChange}
          value={password}
          required={true}
          actionIcon={ passwordType.show ? 'eye' : 'eye slash' }
          onClick={hidePassword} />
        <InputField
          fluid
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Confirm Your Password'
          type={ passwordType.show ? 'password' : 'text' }
          name='password_confirmation'
          onChange={handleChange}
          value={confirmPassword}
          required={true} />
        <ButtonComponent type='submit' size='big' color='blue'>CONTINUE</ButtonComponent>
      </FormStyle>
    </ContainerStyle>
  );
};
const mapStateToProps = state => ({ resetPasswordState: state.userPassword.resetPassword });


export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);
