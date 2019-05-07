import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from './Icons';
import Followers from './Stats/Followers';
import Following from './Stats/Following';
import Facebook from '../../../assets/images/svgs/facebook.svg';
import Twitter from '../../../assets/images/svgs/twitter.svg';
import LinkedIn from '../../../assets/images/svgs/linkedin.svg';
import AnchorTag from '../../shared/Links/DefaultLink';

const Wrapper = styled.span`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 2rem 0;
`;

const Social = ({ socialLinks }) => (
  <Fragment>
    <Wrapper>
      <Social.Wrapper>
        <Followers paragraphStyle={{ margin: '0 10px', fontFamily: 'Circular-Book', color: '#3A8FDD' }} followers="90"/>
        <Following paragraphStyle={{ margin: '0 10px', fontFamily: 'Circular-Book', color: '#3A8FDD' }} following="190"/>
      </Social.Wrapper>
      <AnchorTag href={socialLinks.facebook}><Icon source={Facebook} /></AnchorTag>
      <AnchorTag href={socialLinks.twitter}><Icon source={Twitter} /></AnchorTag>
      <AnchorTag href={socialLinks.linkedin}><Icon source={LinkedIn} /></AnchorTag>
    </Wrapper>
  </Fragment>
);


Social.Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;


export default Social;
