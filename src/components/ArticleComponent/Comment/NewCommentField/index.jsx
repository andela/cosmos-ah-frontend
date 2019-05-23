import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createArticleCommentAction } from '../../../../state/comments/actions';

const FormField = styled.form`
    input {
    width: 100%;
    background-color: #e2e2e2;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    outline: none;
}`;

const AddComment = ({ createNewComment, match }) => {
  const { id } = match.params;
  const [formInput, setFormInput] = useState({
    body: '',
  });

  const { body } = formInput;

  const handleSubmit = event => {
    event.preventDefault();
    if (!body.trim()) return;
    createNewComment(body, id);
    setFormInput({ body: '' });
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
  };
  return (
    <FormField onSubmit={handleSubmit}>
      <input
        name='body'
        value={body}
        type='text'
        onChange={handleChange}
        placeholder='Add a comment...' />
    </FormField>
  );
};

const mapStateToProps = ({ comments }) => ({
  addNewComment: comments.allComments
});

export default connect(mapStateToProps, {
  createNewComment: createArticleCommentAction
})(AddComment);