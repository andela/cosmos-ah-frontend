import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticleAction } from '../state/article/actions';
import ArticleUtil from '../utils/articles';
import { ArticlePrimaryCard, ArticleSecondaryCard } from './shared/Article';
import ArticleCardHeading from './shared/Heading/ArticleCardHeading';
import Collections from './Collections';
import AppUtil from '../utils';

const {
  articleTags, mapTagsToEmptyArrays, filterArticlesByTags, getTagsThatHaveArticles
} = ArticleUtil;

const PageAside = styled.aside`
  margin-top: 40px;
`;

const MainBody = styled(Container)`
  margin-top: 3em;
`;

const ContainerSection = styled.div`
  padding-bottom: 20px;
`;

const FeaturedCollectionTitle = styled.h3`
  font-family: 'Circular-Light';
  letter-spacing: 2px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const AllCollectionsLink = styled(Link)`
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #3A8FDD;
  :hover {
    color: #2d8be2;
  }
`;

const HomePageMainBody = ({ articles, getArticles }) => {
  useEffect(() => {
    getArticles();
  }, []);

  const articleTagsToArray = mapTagsToEmptyArrays(articleTags);
  articleTags.forEach(tag => {
    articleTagsToArray[tag] = filterArticlesByTags(articles, tag);
  });
  // we only want to display article categories that have articles
  const articleTagsWithArticles = getTagsThatHaveArticles(articleTags, articleTagsToArray);

  return (
    <MainBody>
      <Container as="section">
        <Grid columns="3" doubling stackable>
          <Grid.Row>
            <Grid.Column data-testid="main-section" width={8}>
              <ArticleCardHeading text="Featured for members" />
              {articles.slice(0, 4).map(article => (
                <ArticlePrimaryCard article={article} key={article.id} />
              ))}
              {
                articleTagsWithArticles
                  .map((tag, i) => (
                    <Fragment key={i}>
                      <ArticleCardHeading text={tag} />
                      {
                        articleTagsToArray[tag.toLowerCase()].map(article => (
                          <ArticlePrimaryCard article={article} key={article.id} />
                        ))
                      }
                    </Fragment>
                  ))
              }
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={6}>
              <PageAside>
                <ArticleCardHeading text="Popular on Author's Haven" />
                <Grid columns="equal">
                  {
                    ArticleUtil.getTopTrendingArticles(articles)
                      .map((article, i) => (
                        <ArticleSecondaryCard article={article} count={i} key={article.id} />
                      ))
                  }
                </Grid>
                <ArticleCardHeading text="Preferences" />
                <Grid columns="equal">
                  {
                    ArticleUtil.getBestRatedArticles(ArticleUtil.articles)
                      .map((article, i) => (
                        <ArticleSecondaryCard article={article} count={i} key={article.id} />
                      ))
                  }
                </Grid>
              </PageAside>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* Collection Section */}
        <section style={{
          marginTop: '40px'
        }}>
          <FeaturedCollectionTitle>FEATURED COLLECTIONS</FeaturedCollectionTitle>
          <ContainerSection>
            {
              <Collections collections={AppUtil.collections} />
            }
          </ContainerSection>
          <AllCollectionsLink to="/feeds">SEE ALL COLLECTIONS</AllCollectionsLink>
        </section>
      </Container>
    </MainBody>
  );
};

HomePageMainBody.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func
};

const mapStateToProps = state => ({
  articles: state.articles.allArticles
});

export default connect(mapStateToProps, { getArticles: getArticleAction })(HomePageMainBody);
