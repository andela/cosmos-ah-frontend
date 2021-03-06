import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { socialAuth } from '../state/auth/action';


export const HandleSocialAuth = props => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    props.socialAuth(urlParams.get('token'), props.history);
  }, []);

  return (
    <div></div>
  );
};

export const ConnectedHandleSocialAuth = connect(null, { socialAuth })(HandleSocialAuth);
