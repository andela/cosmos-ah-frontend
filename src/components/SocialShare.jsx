import React, { Fragment } from 'react';
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';
import styled from 'styled-components';

import FacebookIcon from '../assets/images/svgs/facebook.svg';
import TwitterIcon from '../assets/images/svgs/twitter.svg';
import LinkedinIcon from '../assets/images/svgs/linkedin.svg';

const Social = props => (
  <Fragment>
    <Social.Icon
      src={props.iconUrl}
      alt ={props.alt}
    />
  </Fragment>
);

const SocialShare = () => (
   <Fragment >
    <FacebookShareButton url={window.location}>
      <Social iconUrl={FacebookIcon} alt='FacebookShareButton'/>
    </FacebookShareButton>
    <TwitterShareButton url={window.location}>
      <Social iconUrl={TwitterIcon} alt='TwitterShareButton'/>
    </TwitterShareButton>
    <LinkedinShareButton url={window.location}>
      <Social iconUrl={LinkedinIcon} alt='LinkedinShareButton'/>
    </LinkedinShareButton>
  </Fragment>
);

Social.Icon = styled.img`
  width: 20px;
  height: 40px;
  cursor: pointer;
  outline: none;
`;


export default SocialShare;
