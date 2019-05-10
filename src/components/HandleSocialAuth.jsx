/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, withRouter } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  loginState: state.Auth
});

export default connect(mapStateToProps, { socialAuth })(handleSocialAuth);
