/* eslint-disable */

import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Grid, Container, Image, Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getArticleAction } from '../state/article/actions';
import ArticleUtil from '../utils/articles';
import ArticlePrimaryCard from './shared/Article/ArticlePrimaryCard';
import ArticleSecondaryCard from './shared/Article/ArticleSecondaryCard';

const StyledHeading = styled.h3`
  padding-bottom: 10px; 
`;

const StyledHeadingWithBorder = styled(StyledHeading)`
  border-bottom: 2px solid #777;
  text-transform: capitalize;
`;

const MainBodyContent = styled('section')`
  margin-top: 3em;
`;

const NumberStyling = styled.p`
  font-size: 1.8em;
  color: #aaa;
`;

const StyledColumn = styled(Grid.Column)`
  text-align: center;
`;

const pStyle = {
  padding: 0,
  margin: 0
};

const ArticleReadTimeSpan = styled.span`
  color: #3A8FDD;
`;

const CustomGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const CategoryCustomGrid = styled(CustomGrid)`
  grid-template-rows: 1fr;
`;

const StyledContainer = styled(Container)`
  font-family: sans-serif;
`;

const HomePageBody = props => {
  useEffect(() => {
    props.getArticles();
  }, []);

  const { articleCategories } = ArticleUtil;
  const articleCategoryToArticle = ArticleUtil.getAccumulator(articleCategories);
  articleCategories.forEach(category => {
    articleCategoryToArticle[category] = ArticleUtil.filterArticleByCategory(props.articles, category);
  });
  const articleCategoryWithContent = ArticleUtil.filterByContent(articleCategories, articleCategoryToArticle);

  return (
    <MainBodyContent>
      <StyledContainer>
        <Grid columns="2" doubling stackable>
          <Grid.Row>
            <Grid.Column>
              <StyledHeadingWithBorder>
                Featured for members
              </StyledHeadingWithBorder>
              <CustomGrid>
                {props.articles.slice(0, 4).map(article => (
                  <ArticlePrimaryCard key={article.id} article={article} />
                ))}
              </CustomGrid>
              {
                articleCategoryWithContent
                  .map((category, i) => (
                      <Fragment key={i}>
                        <StyledHeadingWithBorder>{category}</StyledHeadingWithBorder>
                        <CategoryCustomGrid key={i}>
                          {
                            articleCategoryToArticle[category.toLowerCase()].map(article => (
                                <ArticlePrimaryCard key={article.id} article={article} />
                            ))
                          }
                        </CategoryCustomGrid>
                      </Fragment>
                  ))
              }
            </Grid.Column>
            <Grid.Column>
              <aside>
                <StyledHeadingWithBorder>Popular on Author's Haven</StyledHeadingWithBorder>
                  <Grid columns="2">
                  {
                  ArticleUtil.getTopTrendingArticles(props.articles)
                    .map((article, i) => {
                      return (
                        <ArticleSecondaryCard article={article} count={i} />
                      )
                    })
                }
                  </Grid>
                <StyledHeadingWithBorder>Preferences</StyledHeadingWithBorder>
                <Grid columns="2">
                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>01</NumberStyling>
                    </StyledColumn>
                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <span>Mar 26 &middot; 7 Min Read</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </aside>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StyledContainer>
    </MainBodyContent>
  );
};

HomePageBody.propTypes = {
  articles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(mapStateToProps, { getArticles: getArticleAction })(HomePageBody);
