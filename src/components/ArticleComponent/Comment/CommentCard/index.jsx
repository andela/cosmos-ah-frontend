import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getArticleCommentsAction } from '../../../../state/comments/actions';
import articleUtil from '../../../../utils/articles';

const CommentsBox = styled.div`
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  padding: 15px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const ArticleComments = ({ articleComments, getComments, match }) => {
  const { id } = match.params;

  useEffect(() => { getComments(id); }, []);

  return (
    <div>
      <h3>Comments</h3>
      <CommentsBox>
        <ul>
          {articleComments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </CommentsBox>
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({
  articleComments: articleUtil.flatten(comments.allComments)
});

export default connect(mapStateToProps, { getComments: getArticleCommentsAction })(ArticleComments);
