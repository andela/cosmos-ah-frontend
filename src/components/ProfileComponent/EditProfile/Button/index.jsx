import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from '../../../shared/Buttons/Button';


const handleClick = () => {

};

const EditProfileButton = ({ buttonTitle }) => (
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
);

EditProfileButton.defaultProps = {
  buttonTitle: 'Edit Profile',
};

EditProfileButton.propTypes = {
  buttonTitle: PropTypes.string,
};

export default withRouter(EditProfileButton);
