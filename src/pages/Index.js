import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { socialAuth } from '../state/auth/actions';


const Home = props => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('token')) {
      props.socialAuth(urlParams.get('token'));
    }
  });

  return (
    <div>
      <h3>Welcome to Authors Haven</h3>
      <p>A place for creative minds</p>
    </div>
  );
};

export default connect(null, { socialAuth })(Home);
