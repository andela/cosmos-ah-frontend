import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import Secondary from '../Content/Secondary';

import '@glidejs/glide/src/assets/sass/glide.core.scss';
import ImageSVG from '../../../assets/images/svgs/footer-vector.svg';

export const Layout = props => {
  useEffect(() => {
  }, []);

  return (
    <Fragment>
      <Layout.Main className="">
        <Layout.Primary style={{ background: 'red !important', height: '100px' }}>
        </Layout.Primary>
        <Layout.Secondary >
          <Secondary />
        </Layout.Secondary>
      </Layout.Main>
      <Layout.FooterImage src={ImageSVG}/>
    </Fragment>
  );
};

Layout.Main = styled.div`
  margin: 5rem auto 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 30% 70%;
  /* grid-gap: 50px; */
  min-height: 80vh;
  @media screen and (max-width: 500px) {
    overflow: hidden;
    grid-template-columns: 0 1fr;
    PADDING: 0 1REM;
  }
`;

Layout.Primary = styled.div`
  background: red;
`;

Layout.Secondary = styled.div`
  height: inherit;
  display: grid;
  align-items: center;
`;

Layout.FooterImage = styled.img`
  position: fixed;
  min-width: 100%;
  bottom: 0;
  left: 0;
  z-index: -9999999;
`;
