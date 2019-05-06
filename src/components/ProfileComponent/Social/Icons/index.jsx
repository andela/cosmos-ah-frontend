import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SocialIcon = ({ size, source, handleSocialClick }) => (
	<Fragment>
		<SocialIcon.Container onClick={handleSocialClick} size={size} src={source}/>
	</Fragment>
);


SocialIcon.Container = styled.img`
  width: 20px;
	height: 16px;
	cursor: pointer;
`;

SocialIcon.propTypes = {
  source: PropTypes.string,
};

export default SocialIcon;
