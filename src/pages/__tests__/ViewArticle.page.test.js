import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';

import ViewArticle from '../ViewArticle';
import { mockStoreData, articleIsViewed } from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
mockStoreData.articles.articleIsViewed = articleIsViewed;
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the ViewArticle page', () => {
  test('<ViewArticle /> component is rendered', () => {
    const viewArticle = render(<Provider store={store}><Router><ViewArticle /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });
});