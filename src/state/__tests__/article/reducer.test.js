import articleReducer from '../../article/reducers';
import { getArticleByIDSuccess, getArticleByIDError,getArticleByID } from '../../article/actions';
import { articleIsViewed } from '../../../__mocks__/store';

const initialState = {
  articles: {
    allArticles: [],
    isArticleRequest: false,
  },
};


describe('GET ARTICLE REDUCER', () => {
  it('The initial state', () => {
    expect(articleReducer(initialState, undefined)).toEqual(initialState);
  });
  it('The state on successful load of a single article', () => {
    expect(articleReducer({}, getArticleByIDSuccess(articleIsViewed))).toEqual({ articleIsViewed, });
  });
});
