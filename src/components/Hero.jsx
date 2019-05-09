import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ShowCase from './ShowCase';
import NavContainer from './NavContainer';
import { getArticleAction } from '../state/article/actions';
import ArticleUtil from '../utils/articles';

const HeroContainer = styled.div`
  background-color: #3A8FDD;
  color: #FFF;
`;

const Hero = props => {
  const trendingArticle = ArticleUtil.getTrendingArticle(props.articles);
  useEffect(() => {
    props.getArticleAction();
  }, []);
  return (
    <HeroContainer>
      <Container as="section">
        {/* Nav bar space */}
        <NavContainer />
        {trendingArticle
          ? <ShowCase article={trendingArticle} />
          : null
        }
      </Container>
    </HeroContainer>
  );
};

const mapStateToProps = state => ({
  articles: state.article.articles
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticleAction())
});

export default connect(mapStateToProps, { getArticleAction })(Hero);
