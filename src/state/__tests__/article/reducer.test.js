import articleReducer from '../../article/reducers';
import {
  createNewArticle,
  createArticleSuccess,
  createArticleFailure,
  getArticleByID,
  getArticleByIDSuccess,
  getArticleByIDError,
  deleteArticleSuccess,
  deleteArticleFailure,
  deleteSelectedArticle,
  updateSelectedArticle,
  updateArticleSuccess,
  updateArticleFailure,
  getArticleAction,
  getArticles,
  getArticlesFailure,
  isArticleRequest
} from '../../article/actions';
import { articleIsViewed } from '../../../__mocks__/store';

const initialState = {
  articles: {
    allArticles: [],
    isArticleRequest: false,
  },
};

describe('GET ARTICLE REDUCER', () => {
  it('The default state', () => {
    expect(articleReducer(initialState, { type: 'TEST_SUCCESS' })).toEqual(initialState);
  });

  it('The state on successful creation of an article', () => {
    initialState.articles.allArticles = [articleIsViewed];
    const expectedState = {
      articles: {
        allArticles: [
          articleIsViewed,
        ],
        isArticleRequest: false,
      }
    };
    expect(articleReducer(initialState, createNewArticle(articleIsViewed))).toEqual(expectedState);
  });

  it('The state on request for an article', () => {
    const expectedState = {
      ...{},
      isArticleRequest: true,
    };
    expect(articleReducer({}, isArticleRequest())).toEqual(expectedState);
  });

  it('The state on successful creation of an article', () => {
    initialState.articles.allArticles = [articleIsViewed];
    initialState.articles.articleIsViewed = articleIsViewed;
    const expectedState = {
      allArticles: [
        articleIsViewed.data,
        ...initialState.articles.allArticles,
      ],
      isArticleRequest: false,
    };
    expect(articleReducer(initialState.articles, createArticleSuccess(articleIsViewed))).toEqual(expectedState);
  });

  it('The state on successful getting all articles', () => {
    const expectedState = {
      ...{},
      allArticles: true,
      isArticleRequest: false,
    };
    expect(articleReducer({}, getArticles({ data: { data: true } }))).toEqual(expectedState);
  });

  it('The state on successful update of an article', () => {
    initialState.articles.allArticles = [articleIsViewed];
    initialState.articles.articleIsViewed = articleIsViewed;
    const expectedState = {
      articles: {
        allArticles: [
          articleIsViewed,
        ],
        articleIsViewed,
        isArticleRequest: false,
      },
      isArticleRequest: false,
      articleIsViewed,
    };
    expect(articleReducer(initialState, updateArticleSuccess(articleIsViewed))).toEqual(expectedState);
  });

  it('The state on unsuccessful update of an article', () => {
    const expectedState = {
      ...{},
      isArticleRequest: false,
    };
    expect(articleReducer({}, updateArticleFailure({}))).toEqual(expectedState);
  });

  it('The state on successful deletion of an article', () => {
    initialState.articles.allArticles = [articleIsViewed.data];
    const expectedState = {
      allArticles: [],
      isArticleRequest: false,
      articleIsViewed: { data: null, error: null }
    };
    expect(articleReducer(initialState.articles, deleteArticleSuccess('52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8'))).toEqual(expectedState);
  });

  it('The state on unsuccessful deletion of an article', () => {
    const expectedState = {
      ...{},
      isArticleRequest: false,
    };
    expect(articleReducer({}, deleteArticleFailure({}))).toEqual(expectedState);
  });

  it('The state on successful getting of an article by id', () => {
    const expectedState = {
      ...{},
      articleIsViewed: { data: true, error: null },
      isArticleRequest: false,
    };
    expect(articleReducer({}, getArticleByIDSuccess({ status: true, data: true }))).toEqual(expectedState);
  });

  it('The state on unsuccessful getting of an article by id', () => {
    const expectedState = {
      ...{},
      isArticleRequest: false,
      articleIsViewed: { data: null, error: { status: true } }
    };
    expect(articleReducer({}, getArticleByIDError({ status: true }))).toEqual(expectedState);
  });

  it('The state on successful load of a single article', () => {
    expect(articleReducer({ isArticleRequest: false }, getArticleByIDSuccess(articleIsViewed))).toEqual({ articleIsViewed, isArticleRequest: false });
  });
});
