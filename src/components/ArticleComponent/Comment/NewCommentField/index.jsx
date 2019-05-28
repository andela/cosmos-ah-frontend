import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createArticleCommentAction } from '../../../../state/comments/actions';

const FormField = styled.form`
    textarea {
      width: 100%;
      background-color: #efefef;
      border: 2px solid #dfe1e5;
      padding: 10px 15px;
      border-radius: 5px;
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
      <textarea
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
})(withRouter(AddComment));
