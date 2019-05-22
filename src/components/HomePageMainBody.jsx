import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getArticleAction } from '../state/article/actions';
import ArticleUtil from '../utils/articles';
import { ArticlePrimaryCard, ArticleSecondaryCard } from './shared/Article';
import ArticleCardHeading from './shared/Heading/ArticleCardHeading';
import Collections from './Collections';
import Collection from './Collection';
import AppUtil from '../utils/index';

const {
  articleCategories, getAccumulator, filterArticleByCategory, filterByContent
} = ArticleUtil;

const PageAside = styled.aside`
  margin-top: 40px;
`;

const MainBody = styled(Container)`
  margin-top: 3em;
`;

const ContainerSection = styled.div`
  display: flex;
  width: 60%;
  padding-bottom: 20px;
  * {
    margin-right: 10px;
  }
`;

const FeaturedCollectionTitle = styled.h3`
  font-family: 'Circular-Light';
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HomePageMainBody = ({ articles, getArticles }) => {
  useEffect(() => {
    getArticles();
  }, []);

  const articleCategoryToArticle = getAccumulator(articleCategories);
  articleCategories.forEach(category => {
    articleCategoryToArticle[category] = filterArticleByCategory(articles, category);
  });
  // we only want to display article categories that have articles
  const articleCategoryWithContent = filterByContent(articleCategories, articleCategoryToArticle);

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
                articleCategoryWithContent
                  .map((category, i) => (
                    <Fragment key={i}>
                      <ArticleCardHeading text={category} />
                      {
                        articleCategoryToArticle[category.toLowerCase()].map(article => (
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
                    ArticleUtil.getBestRatedArticles(ArticleUtil.mockArticles)
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
        <section>
          <FeaturedCollectionTitle>FEATURED COLLECTIONS</FeaturedCollectionTitle>
          <ContainerSection>
            {
              Object.keys(AppUtil.collections).map(collectionTitle => {
                const collection = AppUtil.collections[collectionTitle];
                return (
                  <Collection collection={collection} key={collection.id} />
                );
              })
            }
          </ContainerSection>
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
