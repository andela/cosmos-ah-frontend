import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from 'react-testing-library';
import thunk from "redux-thunk";
import ViewArticle from '../../ArticleComponent/View';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);

afterEach(cleanup);

describe('Handles the rendering of the <ViewArticle />', () => {
  it('Render <ViewArticle /> component with the default state', () => {
    const store = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={store}><Router><ViewArticle match={{ params: { id: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8' } }} /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });

  it('Render <ViewArticle /> component with the article loaded', () => {
    mockStoreData.articles.articleIsViewed = { ...articleIsViewed };
    const storeWithArticle = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={storeWithArticle}><Router><ViewArticle match={{ params: { id: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8' } }} /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });

  it('Render <ContentLoader /> component when the article has been rendered on <ViewArticle /> component', () => {
    delete mockStoreData.articles.articleIsViewed;
    const storeWithArticleDeleted = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={storeWithArticleDeleted}><Router><ViewArticle match={{ params: { id: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8' } }} /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });
});

