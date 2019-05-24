import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Title from './Title';
import Body from './Body';
import Tags from './Tags';
import Checkbox from './Checkbox';
import Button from '../../../shared/Buttons/Button';

import { setArticleTitle, setArticleError, } from '../../../../state/create-article/actions';
import { createNewArticle, } from '../../../../state/article/actions';
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
  createArticle: { error, article, }, createArticleDispatch, setErrors, articles, history,
}) => {
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
    <Fragment>
      {(type === 'title' && showError) && <Content.Error addStyles={{ color: 'red' }}>{message[0]}</Content.Error>}
      <Title />
      <Body />
      {type === 'tag' && <Content.Error addStyles={{ color: 'red' }}>{message[0]}</Content.Error>}
      <Tags />
      <Checkbox isDisabled={disabledCondition} text="Publish this article?" />
      <Content.Wrapper>
        <Button onClicked={handleSubmitOfArticles} isDisabled={(disabledCondition || articles.isArticleRequest)} classList={btnClass.join(' ')}>{article.published ? 'PUBLISH ARTICLE' : 'SAVE ARTICLE'}</Button>
      </Content.Wrapper>
    </Fragment>
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
  setErrors: setArticleError,
})(withRouter(Content));
