import React, { Fragment } from 'react';
import Navigation from '../components/shared/Navigation/Navigation';
import ProfileComponent from '../components/ProfileComponent/index';

const Profile = () => (
  <Fragment>
    <Navigation />
    <ProfileComponent />
  </Fragment>
);

export default Profile;
