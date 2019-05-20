import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';
import ArticleUtil from '../../../utils/articles';

const { parseArticleCreationDate } = ArticleUtil;

const StyledColumn = styled(Grid.Column)`
  text-align: center;
`;

const StyledNumber = styled.p`
  font-size: 1.8em;
  color: #aaa;
`;

const ArticleAuthor = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

const ArticleTitleLink = styled(Link)`
  color: #333333;
  &:hover {
    color: #111111;
  }
`;

const ArticleSecondaryCard = ({
  article: {
    id, title, totalReadTime, createdAt, author, imageUrl, tags
  }, count
}) => (
    <Grid.Row>
      <StyledColumn width={4} verticalAlign="middle">
        <StyledNumber>0{count + 1}</StyledNumber>
      </StyledColumn>

      <Grid.Column width={7}>
        <ArticleTitleLink to={`/article/${id}`}>
          <h3>{title}</h3>
        </ArticleTitleLink>
        <ArticleAuthor>{author.fullName} in {tags[0]}</ArticleAuthor>
        <span>{parseArticleCreationDate(createdAt)} &middot; {totalReadTime} {totalReadTime > 1 ? 'mins' : 'min'} read</span>
      </Grid.Column>

      <Grid.Column width={5}>
        <Image src={imageUrl[0]} alt="" width={100} height={100} rounded />
      </Grid.Column>
    </Grid.Row>
);

ArticleSecondaryCard.propTypes = {
  article: PropTypes.object.isRequired,
  count: PropTypes.number
};

export default ArticleSecondaryCard;
