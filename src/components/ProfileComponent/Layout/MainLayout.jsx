import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle as Title } from '../../shared/Text/Text';
import Bio from '../Bio/Bio';
import Social from '../Social';
import EditProfileButton from '../EditProfile/Button';
import Activity from '../Activity';

const Layout = ({ profileData }) => (
  <div className="nine wide column">
    <div className="ui secondary menu stackable">
      <div className="item">
        <Title>{profileData.fullName}</Title>
      </div>
      <div className="right item">
        <EditProfileButton />
      </div>
    </div>
    <Bio style={{ lineHeight: '25px' }} text={profileData.bio} />
    <Social socialLinks={{ facebook: null, twitter: null, linkedin: null }} />
    {/* <Activity>{dummyText}</Activity> */}
  </div>
);

Layout.defaultProps = {
  buttonTitle: 'Edit Profile',
  title: 'Andela Simulation',
};

Layout.propTypes = {
  buttonTitle: PropTypes.string,
  title: PropTypes.string,
};

export default Layout;
