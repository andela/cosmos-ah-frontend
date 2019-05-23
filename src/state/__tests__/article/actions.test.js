import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from '../../../lib/axios';
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
} from '../../article/actions';
import { JWT_TOKEN, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('GET AN ARTICLE', () => {
  it('Get articles successful', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(getArticleAction());
    const [getAction] = store.getActions();
    expect(getAction.type).toEqual(getArticles(articleIsViewed).type);
  });

  it('Get articles unsuccessful', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(getArticleAction('benin'));
    const [getAction] = store.getActions();
    expect(getAction.type).toEqual(getArticlesFailure({ error: true }).type);
  });

  it('Get an article by ID successfully', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(getArticleByID(undefined, '1839374c-53ea-438c-815d-1fe301422830'));
    const [,getAction] = store.getActions();
    expect(getAction.type).toEqual(getArticleByIDSuccess(articleIsViewed).type);
  });

  afterEach(() => store.clearActions());

  it('Get an article by ID unsuccessfully', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(getArticleByID(undefined, undefined));
    const [,getAction] = store.getActions();
    expect(getAction.type).toEqual(getArticleByIDError({ error: true }).type);
  });
});

describe('CREATE ARTICLE', () => {
  afterEach(() => store.clearActions());
  it('Create an article successfully', async () => {
    const article = {
      title: 'articleIsViewed.data.title',
      body: 'articleIsViewed.data.body',
      description: 'articleIsViewed.data.body',
      tags: ['articleIsViewed.data.tags'],
      imageUrl: ['articleIsViewed.data.imageUrl'],
    };
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(createNewArticle(article, 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602'));
    const [,createSuccess] = store.getActions();
    expect(createSuccess.type).toEqual(createArticleSuccess(article).type);
  });
  it('Create an article is unsuccessful', async () => {
    const article = {
      title: 'articleIsViewed.data.title',
      body: 'articleIsViewed.data.body',
      tags: ['articleIsViewed.data.tags'],
      id: 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602',
      imageUrl: ['articleIsViewed.data.imageUrl'],
    };
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(createNewArticle(article, undefined));
    const [,createFailure] = store.getActions();
    expect(createFailure.type).toEqual(createArticleFailure({ error: true }).type);
  });
});

describe('UPDATE ARTICLE', () => {
  afterEach(() => store.clearActions());
  it('Update an article successfully', async () => {
    const article = {
      title: 'articleIsViewed.data.title',
      body: 'articleIsViewed.data.body',
      tags: ['articleIsViewed.data.tags'],
      id: 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602',
      imageUrl: ['articleIsViewed.data.imageUrl'],
    };
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(updateSelectedArticle(article, 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602'));
    const [,updateSuccess] = store.getActions();
    expect(updateSuccess.type).toEqual(updateArticleSuccess(article).type);
  });
  it('Update an article unsuccessfully', async () => {
    const article = {
      title: 'articleIsViewed.data.title',
      body: 'articleIsViewed.data.body',
      tags: ['articleIsViewed.data.tags'],
      id: 'afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602',
      imageUrl: ['articleIsViewed.data.imageUrl'],
    };
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(updateSelectedArticle(article, undefined));
    const [,updateFailure] = store.getActions();
    expect(updateFailure.type).toEqual(updateArticleFailure({ error: true }).type);
  });
});

describe('DELETE ARTICLE', () => {
  afterEach(() => store.clearActions());
  it('Delete an article successfully', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(deleteSelectedArticle('afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602'));
    const [,deleteAction] = store.getActions();
    expect(deleteAction).toEqual(deleteArticleSuccess('afa7ac4d-ca41-4d9f-a55d-3ba9f9c06602'));
  });

  it('Delete an article unsuccessfully', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    await store.dispatch(deleteSelectedArticle());
    const [,deleteAction] = store.getActions();
    expect(deleteAction.type).toEqual(deleteArticleFailure().type);
  });
});
