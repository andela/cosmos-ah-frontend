import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from '../../../lib/axios';
import {
  getArticleCommentsAction,
  createArticleCommentAction,
  getArticleCommentsSuccess,
  getArticleCommentsFailure,
  createArticleCommentSuccess,
  createArticleCommentFailure
} from '../actions';
import { JWT_TOKEN } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('GET COMMENTS ON ARTICLES', () => {
  it('Get unsuccessful article comments', async () => {
    let error;
    await store.dispatch(getArticleCommentsAction(undefined));
    expect(store.getActions()[0].type).toEqual(getArticleCommentsFailure(error).type);
  });
});

describe('CREATE COMMENT ON ARTICLE', () => {
  afterEach(() => store.clearActions());
  it('Create an article successfully', async () => {
    const comment = {
      body: 'comment body',
    };
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(createArticleCommentAction(comment.body, 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602'));
    const [, createSuccess] = store.getActions();
    expect(createSuccess.type).toEqual(createArticleCommentSuccess(comment).type);
  });

  it('unsuccessful creation of article comment', async () => {
    let error;
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(createArticleCommentAction(error));
    expect(store.getActions()[0].type).toEqual(createArticleCommentFailure(error).type);
  });
});
