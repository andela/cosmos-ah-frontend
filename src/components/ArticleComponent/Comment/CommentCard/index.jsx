import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';
import { getArticleCommentsAction } from '../../../../state/comments/actions';
import articleUtil from '../../../../utils/articles';

const CommentsBox = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  li {
    margin: 8px 0;
    padding: 10px 17px;
    background-color: #e2e2e24d;
    border-radius: 10px;
    border: 1px solid #dfe1e5;
  }
  p {
    margin: -7px 15px;
    color: #5f5fc1;
  }
`;

const ArticleComments = ({ articleComments, getComments, match }) => {
  const { id } = match.params;

  useEffect(() => { getComments(id); }, []);

  return (
    <div>
      <br />
      <h3>Comments</h3>
      <CommentsBox>
        {articleComments.map(comment => (
          <div>
            <li key={comment.id}>{comment.body}</li>
            <p>{moment(comment.createdAt).fromNow()}</p>
          </div>
        ))}
      </CommentsBox>
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({
  articleComments: articleUtil.flatten(comments.allComments)
});

export default connect(mapStateToProps, { getComments: getArticleCommentsAction })(ArticleComments);
