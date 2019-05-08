import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  display: block !important;
`;

const ShowCaseIntroTextHeading = styled.h3`
  font-size: 2.5em;
  margin-bottom: 0;
`;
const ShowCaseIntroTextTagLine = styled.div`
  width: 50%;
`;

const ShowCaseArticleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ShowCaseAppTitle = styled.span`
  display: block;
`;

const StyledCategory = styled.span`
  color: orange;  
`;

const ShowCase = ({ article }) => (
  <Grid as="section" columns="2">
    <Grid.Row>
      <Grid.Column>
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
          <ImageContainer>
            <ShowCaseArticleImage src={article.imageUrl} alt="" />
          </ImageContainer>
          <ShowCaseIntroTextTagLine>
            <h3 data-testid="my-article">{article.title}</h3>
            <p>{article.body.substring(0, 150)}....</p>
          </ShowCaseIntroTextTagLine>
          <div>
            <p>{article.author.fullName} in <StyledCategory>Politics</StyledCategory></p>
            <p>{moment(article.createdAt).format('DDD Mo')}
              <span>&nbsp;&middot;&nbsp;
              {article.totalReadTime} {article.totalReadTime > 1 ? 'Mins' : 'Min'} read &nbsp;
              <Icon name="star" size="small" />
            </span>
            </p>
          </div>
        </section>
      </Grid.Column>
    </Grid.Row>
  </Grid>
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
