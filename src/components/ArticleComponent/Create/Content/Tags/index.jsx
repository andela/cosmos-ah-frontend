/* eslint-disable no-undef */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Taggle from 'taggle';

import { colors } from '../../../../../lib/colors';
import { setArticleTags } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

const initializeTagsEditor = setTagsInState => {
  const taggle = new Taggle('tags', {
    duplicateTagClass: 'bounce',
    additionalTagClasses: '',
    hiddenInputName: 'tags[]',
    delimeter: [',', ' ', ''],
    placeholder: 'Enter tags that you feel are related to your article.',
    tagFormatter: element => {
      const colorsLength = colors.length;
      const min = Math.ceil(0);
      const max = Math.floor(colorsLength);
      const classIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      element.classList.add(colors[classIndex]);
    },
    onBeforeTagAdd: (event, tag) => {
      if (/\s/.test(tag)) { return false; }
      return tag;
    },
    onTagAdd: (event, tag) => setTagsInState(taggle.getTagValues()),
    onTagRemove: (event, tag) => setTagsInState(taggle.getTagValues()),
  });
  return taggle;
};

const Tags = ({ setTags }) => {
  useEffect(() => {
    initializeTagsEditor(setTags);
  }, []);
  return (
    <Fragment>
      <Tags.Wrapper>
        <div id="tags" className="input textarea"></div>
      </Tags.Wrapper>
    </Fragment>
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
  })(Tags);
