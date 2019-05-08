import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle as Title } from '../../shared/Text/Text';
import Bio from '../Bio/Bio';
import Social from '../Social';
import EditProfileButton from '../EditProfile/Button';

const dummyText = 'Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.';

const Layout = ({ buttonTitle, title }) => (
  <div className="ten wide column">
    <div className="ui secondary menu stackable">
      <div className="item">
        <Title>{title}</Title>
      </div>
      <div className="right item">
        <EditProfileButton />
      </div>
    </div>
    <Bio text={dummyText} />
    <Social socialLinks={{ facebook: null, twitter: null, linkedin: null }} />
    {/* Should contain activity board for the Users profile <Activity>{dummyText}</Activity> */}
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
