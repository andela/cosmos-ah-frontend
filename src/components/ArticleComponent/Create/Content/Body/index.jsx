/* eslint-disable no-undef */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MediumEditor from 'medium-editor';

import { setArticleBody, setArticleImages } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

import { editorHandler } from '../../../../../lib/editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const Body = ({ setBody, setImages, createArticle, articleBody }) => {
  useEffect(() => {
    editorHandler(setBody, setImages);
  }, [setBody, setImages, createArticle]);
  return (
    <Fragment>
      <Body.Wrapper>
        <Body.Textarea value={articleBody} className='editor'/>
      </Body.Wrapper>
    </Fragment>
  );
};

Body.Wrapper = styled.div`
  border-bottom-left-radius: 12px ;
  border-bottom-right-radius: 12px ;
  display: flex;
`;


Body.Textarea = styled.textarea`
  padding: 2rem .5rem;
  margin: 1rem;
  width: 100%;
  min-height: 2rem;
  display: block;
  overflow: hidden;
  background: inherit;
  resize: none;
  font-family: 'Circular-Book';
  font-size: 1.6rem;
  color: #555555;
  border: 0;
  outline: none;
  line-height: 1.6;
  &::-webkit-input-placeholder {
    color: #555555;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1rem .5rem;
  }
`;


const mapStateToProps = state => ({ createArticle: createArticleSelector(state) });

export default connect(mapStateToProps,
  {
    setBody: setArticleBody,
    setImages: setArticleImages,
  })(Body);
