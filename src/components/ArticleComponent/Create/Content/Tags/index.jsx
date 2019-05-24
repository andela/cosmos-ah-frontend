/* eslint-disable no-undef */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { initializeTagsEditor } from '../../../../../lib/tags';
import { setArticleTags, setArticleError } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

const Tags = ({ setTags, setErrors, articleTags }) => {
  if (articleTags === undefined) { articleTags = []; }
  useEffect(() => {
    initializeTagsEditor(setTags, setErrors, articleTags);
  }, []);
  return (
    <Tags.Wrapper>
      <div id="tags" className="input textarea"></div>
    </Tags.Wrapper>
  );
};

Tags.Wrapper = styled.div`
  border-radius: 12px;
  display: flex;
  margin: 1rem;
`;

const mapStateToProps = state => ({ createArticle: createArticleSelector(state) });

export default connect(mapStateToProps,
  {
    setTags: setArticleTags,
    setErrors: setArticleError,
  })(Tags);
