import React, { Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleUtil from '../../../utils/articles';

const { parseArticleCreationDate } = ArticleUtil;

const CardContentContainer = styled.div`
  margin-bottom: 20px;
`;

const ArticleReadTime = styled.span`
  color: #3A8FDD;
`;

const ArticlePrimaryCard = ({
  article: {
    id, title, description, author, createdAt, imageUrl, totalReadTime
  }
}) => (
    <Fragment key={id}>
      <CardContentContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{author}</span>
        <span>
          {parseArticleCreationDate(createdAt)}
          {' '}&middot;
          </span>{' '}
        <ArticleReadTime data-testId={`article-read-time-${id}`}>
          {totalReadTime} {totalReadTime > 1 ? 'mins' : 'min'} read
          </ArticleReadTime>{' '}
        <Icon name="star" size="small" color="grey" data-testId={`card-icon-${id}`} />
      </CardContentContainer>
      <div>
        {/* Space left intentionally */}
      </div>
      <div>
        <Image src={imageUrl} alt="" width={100} height={100} rounded />
      </div>
    </Fragment>
);

ArticlePrimaryCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticlePrimaryCard;
