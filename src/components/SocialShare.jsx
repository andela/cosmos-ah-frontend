import React, { Fragment, useEffect } from 'react';
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';
import styled, { img } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookmarkIcon from '../assets/images/svgs/bookmark.svg';
import FacebookIcon from '../assets/images/svgs/facebook.svg';
import TwitterIcon from '../assets/images/svgs/twitter.svg';
import LinkedinIcon from '../assets/images/svgs/linkedin.svg';

const Bookmark = props => (
  <Fragment>
    <Bookmark.Icon
      src={props.iconUrl}
    />
  </Fragment>
);

const SocialShare = props => (
   <Fragment >
    <FacebookShareButton url={'https://ah-frontend-stage.herokuapp.com/articles/979eaa2e-5b8f-4103-8192-4639afae2ba7'}>
      <Bookmark iconUrl={FacebookIcon} />
    </FacebookShareButton>
    <TwitterShareButton url={'https://ah-frontend-stage.herokuapp.com/articles/979eaa2e-5b8f-4103-8192-4639afae2ba7'}>
      <Bookmark iconUrl={TwitterIcon} />
    </TwitterShareButton>
    <LinkedinShareButton url={'https://ah-frontend-stage.herokuapp.com/articles/979eaa2e-5b8f-4103-8192-4639afae2ba7'}>
      <Bookmark iconUrl={LinkedinIcon} />
    </LinkedinShareButton>
  </Fragment>
);

Bookmark.Icon = styled.img`
	width: 25px;
    height: 40px;
    align: center;
`;


export default withRouter(SocialShare);
