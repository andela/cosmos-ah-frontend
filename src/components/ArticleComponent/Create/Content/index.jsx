/* eslint-disable no-nested-ternary */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Title from './Title';
import Body from './Body';
import Tags from './Tags';
import Checkbox from './Checkbox';
import Button from '../../../shared/Buttons/Button';

import '../../../../assets/css/App.css';

import { setArticleTitle, setArticleError, setArticleOnUpdate, } from '../../../../state/create-article/actions';
import { createNewArticle, updateSelectedArticle, } from '../../../../state/article/actions';
import { createArticleSelector } from '../../../../state/create-article/selectors';
import { articleSelector } from '../../../../state/article/selectors';

import { Validator } from '../../../../utils/articles';

import '../../../../assets/css/colors.css';

const validateArticle = async data => {
  const rules = {
    title: ['required', 'min:5', 'max:255', 'regex:/[a-zA-Z]/i'],
    body: 'required|string',
  };
  const errorMessages = {
    'required.title': 'A title is required for your article!',
    'min.title': 'Your article title must not be less than 3 characters!',
    'max.title': 'Your article title must not exceed 255 characters!',
  };
  const validate = await Validator(data, rules, errorMessages);
  return validate;
};

const Content = ({
  createArticle: { error, article, },
  createArticleDispatch, updateArticleDispatch,
  setErrors, articles, history, match, setArticleUpdate,
}) => {
  const { params, path } = match;
  const state = path === '/article/edit/:id' ? 'edit' : 'create';
  useEffect(() => {
    const updateArticleField = () => {
      if (match.path === '/article/edit/:id') {
        if (articles.articleIsViewed && articles.articleIsViewed.data) {
          return setArticleUpdate(articles.articleIsViewed.data);
        }
        return history.push(match.url.replace('/edit', ''));
      }
    };
    updateArticleField();
  }, [match]);
  const handleSubmitOfArticles = async () => {
    const checkValidate = await validateArticle({ title: article.title, body: article.body });
    if (!checkValidate.passes()) {
      const { errors: { errors } } = checkValidate;
      return setErrors({
        status: true, showError: true, type: 'title', message: Object.values(errors),
      });
    }
    setErrors({
      showError: false, status: false, message: [], type: null
    });
    try {
      if (state === 'edit') {
        const { data } = await updateArticleDispatch(article, params.id);
        return history.push(`/article/${data.id}`);
      }
      const { data } = await createArticleDispatch(article);
      return history.push(`/articles/${data.id}`);
    } catch (err) {
      throw Error(err);
    }
  };
  const {
    message, type, showError,
  } = error;
  const disabledCondition = article.title.length < 3 || article.body.length < 1;
  const btnClass = [article.published ? 'button-publish' : 'button-save', articles.isArticleRequest ? 'loading' : '', ...'ui button'.split(' ')];
  return (
    <div className="text-focus-in">
      {(type === 'title' && showError) && <Content.Error addStyles={{ color: 'red' }}>{message[0]}</Content.Error>}
      <Title articleTitle={article.title} />
      <Body articleBody={article.body} />
      {type === 'tag' && <Content.Error addStyles={{ color: 'red' }}>{message[0]}</Content.Error>}
      <Tags articleTags={article.tags} />
      {(state !== 'edit' && article.published === true) && <Checkbox isDisabled={disabledCondition} text="Publish this article?" />}
      <Content.Wrapper>
        <Button onClicked={handleSubmitOfArticles} isDisabled={(disabledCondition || articles.isArticleRequest)} classList={btnClass.join(' ')}>{state === 'edit' ? 'UPDATE ARTICLE' : article.published ? 'PUBLISH ARTICLE' : 'SAVE ARTICLE'}</Button>
      </Content.Wrapper>
    </div>
  );
};

Content.Wrapper = styled.div`
  margin: 1rem;
`;
Content.Error = styled.p`
  padding: 0 1.5rem;
  width: 100%;
  font-family: Circular-Book;
  margin-bottom: 0px;
  opacity: 0.5;
  ${props => props.addStyles}
`;

const mapStateToProps = state => ({
  createArticle: createArticleSelector(state),
  articles: articleSelector(state)
});

export default connect(mapStateToProps, {
  setTitle: setArticleTitle,
  createArticleDispatch: createNewArticle,
  updateArticleDispatch: updateSelectedArticle,
  setArticleUpdate: setArticleOnUpdate,
  setErrors: setArticleError,
})(withRouter(Content));
