import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShowCase from './ShowCase';
import NavContainer from './NavContainer';
import { getArticleAction } from '../state/article/actions';
import ArticleUtil from '../utils/articles';

const HeroContainer = styled.div`
  background-color: #3A8FDD;
  color: #FFF;
`;

export const Hero = props => {
  const trendingArticle = ArticleUtil.getTrendingArticle(props.articles);
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <HeroContainer>
      <Container as="section">
        <NavContainer />
        <ShowCase article={trendingArticle} />
      </Container>
    </HeroContainer>
  );
};

const mapStateToProps = state => ({
  articles: state.article.articles
});

Hero.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  getArticles: PropTypes.func
};

export default connect(mapStateToProps, { getArticles: getArticleAction })(Hero);
