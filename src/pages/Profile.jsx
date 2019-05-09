import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/shared/Navigation/Navigation';
import ProfileComponent from '../components/ProfileComponent/index';

import getUserProfile from '../state/profile/actions';

const Profile = ({ getProfile }) => {
  useEffect(() => {
    async function fetchData() {
      return getProfile();
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <Navigation />
      <ProfileComponent />
    </Fragment>
  );
};

export default connect(props => props, { getProfile: getUserProfile })(Profile);
