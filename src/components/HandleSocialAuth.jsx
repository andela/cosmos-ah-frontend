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
  });

  return (
    <div>
       <Redirect to='/dashboard' />
    </div>
  );
};

export default connect(null, { socialAuth })(handleSocialAuth);
