import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { mount } from 'enzyme';
import { render, cleanup } from 'react-testing-library';

import Checkbox from '../../ArticleComponent/Create/Content/Checkbox';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<Checkbox /> component', () => {
    const checkbox = render(<Provider store={store}><Router><Checkbox /></Router></Provider>);
    expect(checkbox).toBeTruthy();
    expect(checkbox).toMatchSnapshot();
  });

  test("Should register onchange events for the checkbox field", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, },
      match: { params: { id: null } },
      articleIsViewed, 
      history: { push: jest.fn() },
      setTitle: jest.fn(),
      setArticle: jest.fn(),
      articleTitle: articleIsViewed.data.title,
    }
    const wrapper = mount(<Provider store={storeWithArticle}><Router><Checkbox {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();

    const event = { persist: jest.fn(), target: {name: "pollName", value: articleIsViewed.data.title }};
    wrapper.find('.ui>input').first().simulate('change', event);
  });
});
