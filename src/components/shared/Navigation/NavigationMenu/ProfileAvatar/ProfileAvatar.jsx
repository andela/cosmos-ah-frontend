import React, { Fragment } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../Option/index';

import DefaultAvatar from '../../../../../assets/images/avatars/default.jpg';

const Avatar = styled.img`
	height: 50px !important;
	width: 45px !important;
  border-radius: 50px;
`;

const ProfileAvatar = props => (
	<Fragment>
		<div className="item">
			<Avatar src={props.imageSrc || DefaultAvatar} />
			<Dropdown />
		</div>
	</Fragment>
);

export default ProfileAvatar;
