import commentsReducer from '../reducer';
import {
  createArticleCommentAction,
  getArticleCommentsSuccess,
  createArticleCommentSuccess,
} from '../actions';
import { newComment } from '../../../__mocks__/store';

const initialState = {
  comments: {
    allComments: [],
    error: null
  }
};

describe('COMMENT REDUCER', () => {
  it('The default state', () => {
    expect(commentsReducer(initialState, {})).toEqual(initialState);
  });

  it('The state on creating article comments successfully', () => {
    initialState.comments.allComments = [newComment];
    const expectedState = {
      comments: {
        allComments: [
          newComment,
        ],
        error: null
      }
    };
    expect(commentsReducer(initialState, createArticleCommentAction(newComment)))
      .toEqual(expectedState);
  });

  it('The comments state on successful creation', () => {
    initialState.comments.allComments = [newComment];
    initialState.comments.allComments.newComment = newComment;
    const expectedState = {
      allComments: [
        ...initialState.comments.allComments,
        newComment,
      ],
      error: null
    };
    expect(commentsReducer(initialState.comments, createArticleCommentSuccess(newComment)))
      .toEqual(expectedState);
  });
  it('The state on successful getting all article comments', () => {
    const expectedState = {
      ...{},
      allComments: [true],
    };
    expect(commentsReducer({}, getArticleCommentsSuccess({ data: { data: true } })))
      .toEqual(expectedState);
  });
});
