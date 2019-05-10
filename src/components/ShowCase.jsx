import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ArticleUtil from '../utils/articles';

const ImageContainer = styled.div`
  width: 200px;
  height: 150px;
  display: block !important;
`;

const ShowCaseIntroTextHeading = styled.h3`
  font-size: 3em;
  margin-bottom: 0;
`;
const ShowCaseIntroTextTagLine = styled.p`
  width: 50%;
  margin-top: 10px;
  font-size: 1.05em;
`;

const ShowCaseArticleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ShowCaseAppTitle = styled.span`
  display: block;
`;

const StyledLink = styled(Link)`
  color: #f4bc42;
  text-transform: capitalize;
  :hover {
    color: #f4af41;
  }
`;

const ShowCaseContainer = styled.section`
  padding: 20px 0;
  margin-top: -60px;
`;

const ShowCase = ({ article }) => (
  <ShowCaseContainer>
    <Grid as="section" columns="2" stackable>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <ShowCaseIntroTextHeading>
            Welcome to&nbsp;
          <ShowCaseAppTitle>Author's Haven</ShowCaseAppTitle>
          </ShowCaseIntroTextHeading>
          <ShowCaseIntroTextTagLine>
            Creating a community of like-minded authors
            who foster inspiration and innovation by
            leveraging the modern web.
        </ShowCaseIntroTextTagLine>
        </Grid.Column>
        <Grid.Column>
          <section>
            <h3>Trending stories</h3>
            <ImageContainer>
              <ShowCaseArticleImage src={article.imageUrl} alt="" />
            </ImageContainer>
            <ShowCaseIntroTextTagLine>
              <h3 data-testid="my-article">{article.title}</h3>
              <p>{article.body.substring(0, 150)}....</p>
            </ShowCaseIntroTextTagLine>
            <div>
              <p>Sherlock Holmes in &nbsp;
              <span>
                  <StyledLink to={`/${article.tags[0]}`}>{article.tags[0]}</StyledLink>
                </span>
              </p>
              <p>{ArticleUtil.parseArticleCreationDate(article.createdAt)}
                <span>&nbsp;&middot;&nbsp;
              {article.totalReadTime} {article.totalReadTime > 1 ? 'mins' : 'min'} read &nbsp;
              <Icon name="star" size="small" />
                </span>
              </p>
            </div>
          </section>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ShowCaseContainer>
);

ShowCase.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    tags: PropTypes.array,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    totalReadTime: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default ShowCase;
