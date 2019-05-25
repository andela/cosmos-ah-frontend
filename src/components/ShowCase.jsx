import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Icon, Container } from 'semantic-ui-react';
import DetailsDotSeparator from './shared/Widgets/ArticleDetailsSeparator';
import articleUtil from '../utils/articles';

const ImageContainer = styled.div`
  width: 70%;
  height: 150px;
  margin-bottom: 30px;
`;

const ShowCaseIntroTextHeading = styled.h3`
  font-size: 40px;
  margin-bottom: 0;
  font-family: 'Circular-Bold';
`;

const ShowCaseIntroTextTagLine = styled.p`
  font-size: 16px;
  width: 70%;
  letter-spacing: 1px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ShowCaseArticleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ShowCaseAppTitle = styled.p`
  display: block;
  font-family: 'Circular-Bold';
  font-size: 55px;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: -50px;
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`;

const StyledCategory = styled.span`
  color: orange;  
`;

const DynamicSection = styled('section')`
  @media(max-width: 768px) {
    display: none;
  }
`;

const TextContainer = styled('section')`
  margin-top: 50px;
  font-family: 'Circular-Bold';
  @media only screen and (max-width: 768px) {
    margin-top: -40px;
    padding: 80px 30px 100px;
  }
`;

const DynamicGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const ArticleDetailsContainer = styled.div`
  width: 100%;
`;

const ArticleDetails = styled.span`
  margin-right: 5px;
`;

const ArticleMainDetailsContainer = styled.section`
  width: 70%;
  margin: 5px 0 10px;
`;

const FavoriteArticleIcon = styled(Icon)`
  cursor: pointer;
`;

const ShowCase = ({ article: { imageUrl, title, body,
  author, totalReadTime, createdAt } }) => (
  <DynamicGrid>
    <Grid.Column>
      <TextContainer>
        <ShowCaseIntroTextHeading>
          Welcome to
        <ShowCaseAppTitle>Author's Haven</ShowCaseAppTitle>
        </ShowCaseIntroTextHeading>
        <ShowCaseIntroTextTagLine>
          Creating a community of like-minded authors
          who foster inspiration and innovation by
          leveraging the modern web.
        </ShowCaseIntroTextTagLine>
      </TextContainer>
    </Grid.Column>
    <Grid.Column>
      <DynamicSection>
        <h3>Trending Story</h3>
        <ImageContainer>
          <ShowCaseArticleImage src={imageUrl[0]} alt="A rectangular-shaped article image" />
        </ImageContainer>
        <ArticleMainDetailsContainer>
          <h3 data-testid="ah-article-title">{title}</h3>
          <p>{articleUtil.extractSubsetOfArticleBody(body, 30)}....</p>
        </ArticleMainDetailsContainer>
        <section>
          <p>{author.fullName} in {' '}
            <StyledCategory>Politics</StyledCategory>
          </p>
          <ArticleDetailsContainer>
            <ArticleDetails>
              {articleUtil.parseArticleCreationDate(createdAt)}</ArticleDetails>
            <ArticleDetails>
              <DetailsDotSeparator />
            </ArticleDetails>
            <ArticleDetails>{totalReadTime} {totalReadTime > 1 ? 'mins ' : 'min '}read</ArticleDetails>
          </ArticleDetailsContainer>
        </section>
      </DynamicSection>
    </Grid.Column>
  </DynamicGrid>
);

ShowCase.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.array.isRequired,
    author: PropTypes.object.isRequired,
    totalReadTime: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default ShowCase;
