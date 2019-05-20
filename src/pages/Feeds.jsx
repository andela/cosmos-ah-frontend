import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { getArticleAction } from '../state/article/actions';

const Body = styled.div`
  background-color: #fff;
`;

const Background = styled.div`
  margin: 0;
  padding: 30px;
  background-image: url('https://res.cloudinary.com/raymondosy/image/upload/v1557386632/Screenshot_2019-05-09_at_7.57.00_AM_y0hvl6.png');
  background-color: #ffffff;
  height: 100vh;
  background-size: cover;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: row;
`;

export const Feeds = props => {
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <Body>
      <Background>
        <Fragment>
          <div>
            {props.articles.slice(0, 2).map(article => (
            <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        </Fragment>
      </Background>
    </Body>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.allArticles,
});

export const connectedFeed = connect(mapStateToProps, { getArticles: getArticleAction })(Feeds);
