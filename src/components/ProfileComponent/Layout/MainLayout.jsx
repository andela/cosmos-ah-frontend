import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle as Title } from '../../shared/Text/Text';
import Button from '../../shared/Buttons/Button';
import Bio from '../Bio/Bio';
import Social from '../Social';
import Activity from '../Activity';

const dummyText = 'Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.';

const handleClick = () => {

};

const Layout = ({ buttonTitle, title }) => (
  <div className="ten wide column">
    <div className="ui secondary menu stackable">
      <div className="item">
        <Title>{title}</Title>
      </div>
      <div className="right item">
        <Button
          classList="btn btn-info"
          buttonStyle={{
            bacgkround: '#ffffff',
            color: '#3A8FDD;',
            border: '1px solid #3A8FDD',
          }}
          onHover={{ background: '#3A8FDD', color: '#eee;' }}
          onClick={handleClick}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
    <Bio text={dummyText} />
    <Social socialLinks={{ facebook: null, twitter: null, linkedin: null }} />
    <Activity>{dummyText}</Activity>
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
