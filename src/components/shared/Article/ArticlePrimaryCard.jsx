import React, { Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleUtil from '../../../utils/articles';
import bookMarkIcon from '../../../assets/images/svgs/bookmark.svg';

const { parseArticleCreationDate } = ArticleUtil;

const CardContentContainer = styled.div`
  margin-bottom: 20px;
`;

const ArticleReadTime = styled.span`
  color: #3A8FDD;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

const ArticlePrimaryCard = ({
  article: {
    id, title, description, author, createdAt, imageUrl, totalReadTime
  }, articleBookmarkIcon
}) => (
    <Article>
      <CardContentContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{author}</span>
        <span>
          {parseArticleCreationDate(createdAt)}
          {' '}&middot;
          </span>{' '}
        <ArticleReadTime data-testid={`article-read-time-${id}`}>
          {totalReadTime} {totalReadTime > 1 ? 'mins' : 'min'} read
          </ArticleReadTime>{' '}
        <Icon name="star" size="small" color="grey" data-testid={`card-icon-${id}`} />
      </CardContentContainer>
      <div>
        {articleBookmarkIcon}
      </div>
      <div>
        <Image src={imageUrl} alt="" width={100} height={100} rounded />
      </div>
    </Article>
);

ArticlePrimaryCard.propTypes = {
  article: PropTypes.object.isRequired,
  articleBookmarkIcon: PropTypes.element
};

export default ArticlePrimaryCard;
