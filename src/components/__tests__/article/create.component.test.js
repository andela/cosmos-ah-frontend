import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render, cleanup, fireEvent } from 'react-testing-library';

import CreateArticle from '../../ArticleComponent/Create';
import { Content } from '../../ArticleComponent/Create/Content';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';
import { createNewArticle, updateSelectedArticle, } from '../../../state/article/actions';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<CreateArticle /> component', () => {
    const createArticle = render(<Provider store={store}><Router><CreateArticle /></Router></Provider>);
    expect(createArticle).toBeTruthy();
    expect(createArticle).toMatchSnapshot();
  });

  test("Should register events for the create article functionality on create state", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, isArticleRequest: false },
      match: { params: { id: null } },
      articleIsViewed, 
      history: { push: jest.fn() },
      setTitle: jest.fn(),
      setArticle: jest.fn(),
      articleTitle: articleIsViewed.data.title,
      createArticle: {
        article: {
          title: '',
          body: '',
          tags: articleIsViewed.data.tags,
          id: articleIsViewed.data.id,
          imageUrl: articleIsViewed.data.imageUrl,
        },
        error: {
          message: ['null'],
          type: 'title',
          showError: true,
        },
      },
      createArticleDispatch: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      updateArticleDispatch: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      setArticleUpdate: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      setErrors: jest.fn(() => Promise.resolve({ data: { yes: true } })),
    }
    const wrapper = render(<Provider store={storeWithArticle}><Router><CreateArticle {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();
    const button =  wrapper.getByTestId('article-create-button');
    expect(button.tagName).toEqual('BUTTON');
    fireEvent.click(button);
  });
});

describe("Should register events for the create article functionality on edit state", () => {
  test("Edit state", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, isArticleRequest: false },
      match: { params: { id: null } },
      articleIsViewed, 
      history: { push: jest.fn() },
      setTitle: jest.fn(),
      setArticle: jest.fn(),
      articleTitle: articleIsViewed.data.title,
      createArticle: {
        article: {
          title: 'articleIsViewed.data.title',
          body: 'articleIsViewed.data.body',
          tags: articleIsViewed.data.tags,
          id: articleIsViewed.data.id,
          imageUrl: articleIsViewed.data.imageUrl,
        },
        error: {
          message: ['null'],
          type: 'title',
          showError: true,
        },
      },
      match: {
        path: '/article/edit/:id',
        params: {
          id: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8'
        }
      },
      createArticleDispatch: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      updateArticleDispatch: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      setArticleUpdate: jest.fn(() => Promise.resolve({ data: { yes: true } })),
      setErrors: jest.fn(() => Promise.resolve({ data: { yes: true } })),
    }
    const wrapper = render(<Provider store={storeWithArticle}><Router match={props.match}><Content {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();
    const button = wrapper.getByTestId('article-create-button');
    expect(button.tagName).toEqual('BUTTON');
    fireEvent.click(button);
  });
});
