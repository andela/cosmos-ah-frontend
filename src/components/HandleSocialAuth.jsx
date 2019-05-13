import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { socialAuth } from '../state/auth/action';


export const handleSocialAuth = props => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    props.socialAuth(urlParams.get('token'), props.history);
  }, []);

  return (
    <div></div>
  );
};

export default connect(null, { socialAuth })(handleSocialAuth);
