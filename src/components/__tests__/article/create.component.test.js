import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from 'react-testing-library';
import CreateArticle from '../../ArticleComponent/Create';

import { mockStoreData } from '../../../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<CreateArticle /> component', () => {
    const createArticle = render(<Provider store={store}><Router><CreateArticle /></Router></Provider>);
    expect(createArticle).toBeTruthy();
    expect(createArticle).toMatchSnapshot();
  });
});