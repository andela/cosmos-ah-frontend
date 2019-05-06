import React, { Fragment } from 'react';
import styled, { img } from 'styled-components';
import BookmarkIcon from '../../../assets/images/svgs/bookmark.svg';

const Bookmark = ({ displayStyle, handleOnClick, altBookmarkIcon, }) => (
  <Fragment>
    <Bookmark.Icon
      styles={displayStyle}
      onClick={handleOnClick}
      src={altBookmarkIcon || BookmarkIcon}
    />
  </Fragment>
);

Bookmark.Icon = styled.img`
	width: 12.92px;
	height: 15px;
  ${props => props.styles}
`;

export default Bookmark;
