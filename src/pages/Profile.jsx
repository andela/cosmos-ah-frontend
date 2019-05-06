import React, { Fragment } from 'react';

import Navigation from '../components/shared/Navigation/Navigation';
import ProfileComponent from '../components/ProfileComponent/index';

const Profile = props => (
  <Fragment>
    <Navigation />
    <ProfileComponent />
  </Fragment>
);

export default Profile;
