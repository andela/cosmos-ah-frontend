/* eslint-disable */
import React, { Fragment } from 'react';
import { trim } from 'validator';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setArticleTitle, setArticleError } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

const autoResize = () => {
  $(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function () {
        let savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function () {
        let minRows = this.getAttribute('data-min-rows') | 0;
        let rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = ((minRows + rows) / 2);
    });
};

const Title = ({ setTitle, setErrors, articleTitle, }) => {
  autoResize();
  const getArticleTitle = (evt) => {
    evt.persist();
    const value = evt.target.value;
    if (value.length < 3) { return setErrors({ status: true, showError: true, type: 'title', message: ['Title is too short!']}); }
    setErrors({ showError: false, status: false, message: [], type: null });
    return setTitle(trim(value));
  };
  return (
    <Fragment>
      <Title.Wrapper>
        <Title.Input onBlur={() => setErrors({ showError: false }) } onChange={getArticleTitle} className='autoExpand' rows='2' data-min-rows='0' placeholder="Title" value={articleTitle} />
      </Title.Wrapper>
    </Fragment>
  );
};

Title.Wrapper = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
`;

Title.Input = styled.textarea`
  padding: 0 .5rem;
  margin: 1rem;
  width: 100%;
  min-height: 2rem;
  display: block;
  overflow: hidden;
  background: inherit;
  resize: none;
  font-family: 'Circular-Bold';
  font-size: 2rem;
  color: #555555;
  border: 0;
  outline: none;
  &::-webkit-input-placeholder {
    color: #555555;
    opacity: 0.5;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    padding: 1rem .5rem;
  }
`;

const mapStateToProps = state => ({ createArticle: createArticleSelector(state) });

export default connect(mapStateToProps, { setTitle: setArticleTitle, setErrors: setArticleError })(Title);

