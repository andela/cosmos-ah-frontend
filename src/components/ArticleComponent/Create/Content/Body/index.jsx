/* eslint-disable no-undef */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MediumEditor from 'medium-editor';

import { setArticleBody, setArticleImages } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const USER_TOKEN = localStorage.getItem('ah-token');

let articleImages = [];

const editorHandler = (setBodyInState, setImagesInState) => {
  const editor = new MediumEditor('.editor', {
    placeholder: {
      text: 'Tell your story'
    },
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
      diffLeft: -10,
      diffTop: -10,
      firstButtonClass: 'medium-editor-button-first',
      lastButtonClass: 'medium-editor-button-last',
      relativeContainer: null,
      standardizeSelectionStart: false,
      static: false,
      align: 'center',
      sticky: true,
      updateOnEmptySelection: false
    },
  });

  $('.editor').mediumInsert({
    editor,
    addons: {
      images: {
        deleteMethod: 'DELETE',
        fileUploadOptions: {
          url: `https://author-haven-stage.herokuapp.com/api/v1/image/articles/upload/${USER_TOKEN}`,
        },
        fileDeleteOptions: {
          url: 'https://author-haven-stage.herokuapp.com/api/v1/image/articles/destroy/'
        },
        uploadCompleted: (el, { result: { files } }) => {
          articleImages = [...articleImages, files[0].url];
          setImagesInState(articleImages);
        },
      },
    }
  });

  editor.subscribe('editableInput', (eventObj, editable) => {
    const [{ value }] = Object.values(editor.serialize());
    setBodyInState(value);
  });
  return editor;
};

const Body = ({ setBody, setImages }) => {
  useEffect(() => {
    editorHandler(setBody, setImages);
  }, []);
  return (
    <Fragment>
      <Body.Wrapper>
        <Body.Input className='editor'/>
      </Body.Wrapper>
    </Fragment>
  );
};

Body.Wrapper = styled.div`
  border-bottom-left-radius: 12px ;
  border-bottom-right-radius: 12px ;
  display: flex;
`;


Body.Input = styled.textarea`
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
