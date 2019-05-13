/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { socialAuth } from '../state/auth/actions';


const handleSocialAuth = props => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    props.socialAuth(urlParams.get('token'));
  }, []);

  const { loginState } = props;
  if (loginState.login.id) {
    props.history.push('/');
  } else if (loginState.login.message === 'Invalid token specified') {
    props.history.push('/login');
  }
  return (
    <div></div>
  );
};

const mapStateToProps = state => ({
  loginState: state.auth
});

export default connect(mapStateToProps, { socialAuth })(handleSocialAuth);
