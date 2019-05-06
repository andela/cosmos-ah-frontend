import React, { Fragment } from 'react';
import styled from 'styled-components';

import DefaultAvatar from '../../../../../assets/images/avatars/default.jpg';

const Avatar = styled.img`
	height: 50px !important;
	width: 45px !important;
  border-radius: 50px;
`;

const ProfileAvatar = props => (
  <Fragment>
		<div className="item">
			<Avatar src={props.user || DefaultAvatar} />
		</div>
	</Fragment>
);

export default ProfileAvatar;
