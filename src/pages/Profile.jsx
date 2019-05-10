import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/shared/Navigation/Navigation';
import ProfileComponent from '../components/ProfileComponent/index';

const Profile = () => (
  <Fragment>
    <Navigation />
    <ProfileComponent />
  </Fragment>
);

export default connect(props => props, { getProfile: getUserProfile })(Profile);
