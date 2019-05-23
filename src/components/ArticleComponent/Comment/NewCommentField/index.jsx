import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { getArticleCommentsAction } from '../../../../state/comments/actions';
import articleUtil from '../../../../utils/articles';
import { InputField } from '../../../PasswordReset/Form';

const FormFeild = styled(Form)`
&&& {
    input {
    width: 100%;
    background-color: #e2e2e2 !important;
    border: none !important;
    padding: 8px 15px !important;
    border-radius: 20px !important;
    outline: none !important;
  }
}`;

const AddComment = props => (
  <FormFeild>
    <Form.Input placeholder='Add a comment...' />
  </FormFeild>
);

// const mapStateToProps = ({ comments }) => ({
//   articleComments: articleUtil.flatten(comments.allComments)
// });

// export default connect(mapStateToProps, { getComments: getArticleCommentsAction })(AddComment);
export default AddComment;
