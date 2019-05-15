/* eslint-disable no-undef */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setArticlePublish } from '../../../../../state/create-article/actions';
import { createArticleSelector } from '../../../../../state/create-article/selectors';

const CheckBox = ({
  onClickedHandler, text, checkboxName, setPublish, isDisabled,
}) => {
  const onCheckBoxChange = evt => {
    evt.persist();
    const { checked } = evt.target;
    return setPublish(checked);
  };
  return (
    <Fragment>
      <CheckBox.Wrapper className="ui slider checkbox">
        <input disabled={isDisabled} onChange={onCheckBoxChange} type="checkbox" name={checkboxName || 'checkbox'} />
        <label>{text}</label>
      </CheckBox.Wrapper>
    </Fragment>
  );
};

CheckBox.Wrapper = styled.div`
  margin: 1rem;
`;

const mapStateToProps = state => ({ createArticle: createArticleSelector(state) });

export default connect(mapStateToProps,
  {
    setPublish: setArticlePublish,
  })(CheckBox);
