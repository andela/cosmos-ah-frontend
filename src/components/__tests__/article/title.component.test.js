import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from 'react-testing-library';
import Title from '../../ArticleComponent/Create/Content/Title';

import { mockStoreData } from '../../../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<Title /> component', () => {
    const articleTitle = render(<Provider store={store}><Router><Title /></Router></Provider>);
    expect(articleTitle).toBeTruthy();
    expect(articleTitle).toMatchSnapshot();
  });
});
