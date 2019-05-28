/* eslint-disable no-undef */
/* eslint-disable no-new */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import { Paragraph } from '../../shared/Text/Text';

import { truncate } from '../../../utils/articles';
import { colors } from '../../../lib/colors';

import '../../../assets/css/glider.min.css';
import '../../../assets/css/colors.css';
import '../../../assets/js/glider.min';

const Avatar = styled.img`
  width: 40px!important;
  height: 40px!important;
  border-radius: 50px;
`;

const slider = () => {
  new Glider(document.querySelector('.tertiary-glider'), {
    slidesToScroll: 1,
    slidesToShow: 50,
    draggable: true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          // itemWidth: 150,
          duration: 0.25
        }
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 100,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
};

const Secondary = props => {
  useEffect(() => {
    slider();
  }, []);
  return (
    <Secondary.GlideWrapper>
      <Secondary.Glide>
        <h3>Top Rated Articles</h3>
        <Secondary.ArticleCardsWrapper className="tertiary-glider">
          {props.followersFeeds.map((article, index) => (<Secondary.ArticleCards key={index + 1}>
            <div className="header">
              <Link to={`/profile/${article.primaryId}`}>
                <Avatar className='avatar' src={article.userImage}/>
              </Link>
              <span className="header-content">
                <Link to=''>
                  <Paragraph classList="header-text-name">
                    Chike Ozulumba
                  </Paragraph>
                </Link>
                <Paragraph classList="header-text-meta">
                  {moment(article.createdAt).fromNow()}
                </Paragraph>
              </span>
            </div>
            <div className="content">
              <Paragraph>
                {truncate(article.body, { TruncateLength: 20, StripHTML: false, Suffix: ' ...' })}
              </Paragraph>
            </div>
            <div className="meta">
              {article.tags.map((tag, i) => {
                const colorsLength = colors.length;
                const min = Math.ceil(0);
                const max = Math.floor(colorsLength);
                const classIndex = Math.floor(Math.random() * (max - min + 1)) + min;
                const classes = [colors[classIndex], 'tag'].join(' ');
                return (<span className={classes} key={i}>{tag}</span>);
              })}
            </div>
          </Secondary.ArticleCards>))}
        </Secondary.ArticleCardsWrapper>
      </Secondary.Glide>
    </Secondary.GlideWrapper>
  );
};

Secondary.GlideWrapper = styled.div`
  .glider {
    margin: 0;
  }
`;

Secondary.Track = styled.div`
  height: inherit;
  display: flex;
`;

Secondary.Glide = styled.div`
  height: inherit;
  h3 {
    margin-left: 2rem;
  }
`;

Secondary.ArticleCards = styled.div`
  min-height: 150px !important;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  box-shadow: 2px 2px 24px rgba(138, 137, 137, 0.47);
  border-radius: 5px;
  min-width: 250px !important;
  margin-right: 20px;
  padding: 1rem;
  .header {
    display: flex;
    align-items: center;
  }
  .content {
    padding: 0.8rem 0;
  }
  .meta span {
    font-size: 0.8rem;
    font-family: Circular-Bold;
    margin-right: 6px;
  }
  .content p {
    font-family: 'Circular-Light';
    font-size: 0.9rem;
  }
  span.header-content {
    margin-left: 10px;
  }
  .header-text-name {
    font-family: 'Circular-Bold';
    margin-bottom: 0;
    color: black;
  }
  .header-text-meta {
    font-family: 'Circular-Book';
    margin-bottom: 0;
    font-size: 0.8rem;
    color: darkgrey;
  }
`;

Secondary.ArticleCardsWrapper = styled.div`
  padding: 2rem;
  display: flex;
`;

export default withRouter(Secondary);
