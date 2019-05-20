import React, { useState } from 'react';
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

  const [error, setError] = useState([]);

  const validate = data => {
    const errors = {};
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(data.password)) {
      errors.password = 'Password should be At least a lowercase character, uppercase character, numeric character, special character and eight characters long.';
    }
    if (data.password_confirmation !== data.password) { errors.password_confirmation = 'Password must match'; }
    return errors;
  };

  const { password, confirmPassword } = formInput;
  const passwordResetToken = props.match.params.resetToken;

  const hidePassword = event => {
    event.preventDefault();
    setPasswordType(() => ({ show: !passwordType.show }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const validateFormField = await validate(formInput);
    if (Object.keys(validateFormField).length > 0) {
      setError(() => ({ ...validateFormField }));
    } else {
      setError(() => ([]));
      props.resetPasswordAction(formInput, passwordResetToken, props.history);
    }
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
    setError(() => (''));
    props.resetPasswordState.error = '';
  };

  const messageClass = [props.resetPasswordState.error || error.password || error.password_confirmation ? 'text-error' : 'text-success'];

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
          error={!!error.password}
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Enter Your New Password'
          type={passwordType.show ? 'password' : 'text'}
          name='password'
          onChange={handleChange}
          value={password}
          required={true}
          actionIcon={passwordType.show ? 'eye' : 'eye slash'}
          onClick={hidePassword} />

        <InputField
          fluid
          error={!!error.password_confirmation}
          size='big'
          icon={{ name: 'lock', color: 'blue' }}
          iconPosition='left'
          placeholder='Confirm Your Password'
          type={passwordType.show ? 'password' : 'text'}
          name='password_confirmation'
          onChange={handleChange}
          value={confirmPassword}
          required={true} />
        {(props.resetPasswordState.error
          || error.password || error.password_confirmation) && (
            <div className={messageClass.join(' ')}>
              {error.password && <p>{error.password}</p>}
              {error.password_confirmation && <p>{error.password_confirmation}</p>}
              {props.resetPasswordState.error && <p>{props.resetPasswordState.error.message}</p>}
            </div>
        )}
        <ButtonComponent type='submit' size='big' color='blue'>CONTINUE</ButtonComponent>
      </FormStyle>
    </ContainerStyle>
  );
};
const mapStateToProps = state => ({ resetPasswordState: state.userPassword.resetPassword });


export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);
