/* eslint-disable no-new */
/* eslint-disable no-undef */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Primary from '../Content/Primary';
import Secondary from '../Content/Secondary';
import Tertiary from '../Content/Tertiary';

import { getFeeds } from '../../../state/feeds/actions';
import {
  mostReadArticleFeedsSelector,
  isFeedsLoadingSelector,
  followersFeedsSelector,
  newArticleFeedsSelector
} from '../../../state/feeds/selectors';

import '@glidejs/glide/src/assets/sass/glide.core.scss';
import ImageSVG from '../../../assets/images/svgs/footer-vector.svg';

const Layout = props => {
  useEffect(() => {
    props.fetchAllFeeds();
  }, []);

  return (
    <Fragment>
      <Layout.Main>
        <Layout.Primary>
          <h3>Fresh Articles</h3>
          <Primary newArticles={props.newArticleFeeds} />
        </Layout.Primary>
        <Layout.Secondary >
          <Secondary followersFeeds={props.followersFeeds} />
          <Tertiary followersFeeds={props.followersFeeds} />
        </Layout.Secondary>
      </Layout.Main>
      <Layout.FooterImage src={ImageSVG}/>
    </Fragment>
  );
};

Layout.Main = styled.div`
  margin: 5rem auto 0;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 30% 70%;
  min-height: 80vh;
  grid-gap: 10px;
  @media screen and (max-width: 620px) {
    overflow: hidden;
    grid-template-columns: 0 1fr;
    padding: 0 1rem;
  }
`;

Layout.Primary = styled.div`
  padding: 0 2rem;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

Layout.Secondary = styled.div`
  height: inherit;
  display: grid;
  /* align-items: center; */
`;

Layout.FooterImage = styled.img`
  position: fixed;
  min-width: 100%;
  bottom: 0;
  left: 0;
  z-index: -9999999;
`;


const mapStateToProps = ({ feeds }) => ({
  mostReadArticleFeeds: mostReadArticleFeedsSelector(feeds),
  isFeedsLoading: isFeedsLoadingSelector(feeds),
  followersFeeds: followersFeedsSelector(feeds),
  newArticleFeeds: newArticleFeedsSelector(feeds),
});

export default connect(
  mapStateToProps,
  {
    fetchAllFeeds: getFeeds,
  }
)(Layout);
