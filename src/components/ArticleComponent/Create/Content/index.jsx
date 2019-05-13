import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from './Title';
import Body from './Body';
import Tags from './Tags';
import Checkbox from './Checkbox';
import Button from '../../../shared/Buttons/Button';

import { setArticleTitle } from '../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../state/create-article/selectors';

const Content = ({ createArticle: { error: { status, message } } }) => (
  <Fragment>
    <Title />
    <Body />
    <Tags />
    <Checkbox text="Publish this article?" />
    <Content.Wrapper>
      <Button isDisabled={status} classList='fluid ui button'>Save and publish</Button>
    </Content.Wrapper>
  </Fragment>
);

Content.Wrapper = styled.div`
  margin: 1rem;
`;

const mapStateToProps = state => ({ createArticle: createArticleSelector(state) });

export default connect(mapStateToProps, { setTitle: setArticleTitle, })(Content);
