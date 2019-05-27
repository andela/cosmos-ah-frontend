import React, { Fragment, useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import { Swipe, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import styled from 'styled-components';

import '@glidejs/glide/src/assets/sass/glide.core.scss';

const glide = new Glide('.glide', {
  // type: 'carousel',
  startAt: 0,
  perView: 3,
  Swipe,
  Breakpoints,
});

glide.on(['mount.after', 'move', 'swipe.end', 'run.offset'], evt => {
  console.log(evt);
});

const Secondary = props => {
  useEffect(() => {
    const runSLiderPlugin = () => {
      // eslint-disable-next-line no-undef
      $(document).ready(() => glide.mount());
    };
    runSLiderPlugin();
  });

  return (
    <Fragment>
      <Secondary.Glide className="glide">
        <Secondary.Track className="glide__track" data-glide-el="track">
          <Secondary.ArticleCardsWrapper>
              <Secondary.ArticleCards style={{ backgroundColor: 'green' }}>
              <div className="header">

              </div>
              <div className="content">

              </div>
            </Secondary.ArticleCards>
            <Secondary.ArticleCards style={{ backgroundColor: 'pink' }}>
              <div className="header">

              </div>
              <div className="content">

              </div>
            </Secondary.ArticleCards>
            <Secondary.ArticleCards style={{ backgroundColor: 'brown' }}>
              <div className="header">

              </div>
              <div className="content">

              </div>
            </Secondary.ArticleCards>
            <Secondary.ArticleCards style={{ backgroundColor: 'blue' }}>
              <div className="header">

              </div>
              <div className="content">

              </div>
            </Secondary.ArticleCards>
            <Secondary.ArticleCards style={{ backgroundColor: 'orange' }}>
              <div className="header">

              </div>
              <div className="content">

              </div>
            </Secondary.ArticleCards>
          </Secondary.ArticleCardsWrapper>
        </Secondary.Track>
      </Secondary.Glide>
    </Fragment>
  );
};

Secondary.Track = styled.div`
  height: inherit;
  display: flex;
`;

Secondary.Glide = styled.div`
  height: inherit;
`;

Secondary.ArticleCards = styled.div`
  height: 150px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  box-shadow: 2px 2px 24px rgba(138, 137, 137, 0.47);
  border-radius: 5px;
  width: 250px !important;
  margin-right: 20px;
`;

Secondary.ArticleCardsWrapper = styled.div`
  padding: 2rem;
  display: flex;
`;

export default Secondary;
