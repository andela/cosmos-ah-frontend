import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getArticleCommentsAction } from '../../../../state/comments/actions';
import articleUtil from '../../../../utils/articles';

const CommentsBox = styled.ul`
  width: 100%;
  border: none;
  list-style-type: none;
  padding: 0;
  li {
    margin: 20px 0;
    padding: 10px;
    background-color: #e2e2e2;
  }
`;

const ArticleComments = ({ articleComments, getComments, match }) => {
  const { id } = match.params;

  useEffect(() => { getComments(id); }, []);

  return (
    <div>
      <h3>Comments</h3>
      <CommentsBox>
        {articleComments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </CommentsBox>
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({
  articleComments: articleUtil.flatten(comments.allComments)
});

export default connect(mapStateToProps, { getComments: getArticleCommentsAction })(ArticleComments);
