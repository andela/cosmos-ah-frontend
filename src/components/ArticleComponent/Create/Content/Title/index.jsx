/* eslint-disable */
import React, { Fragment } from 'react';
import styled from 'styled-components';

const autoResize = () => {
  $(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function () {
        let savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function () {
        let minRows = this.getAttribute('data-min-rows')|0;
        let rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = ((minRows + rows) / 2);
    });
};

const Title = () => {
  autoResize();
  return (
    <Fragment>
      <Title.Wrapper>
        <Title.Input className='autoExpand' rows='1' data-min-rows='0' placeholder="Title" />
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
  padding: 2rem .5rem;
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

export default Title;
