import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { mount } from 'enzyme';
import { render, cleanup } from 'react-testing-library';

import Tags from '../../ArticleComponent/Create/Content/Tags';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  beforeEach(() => {
    Element.getBoundingClientRect = jest.fn(() => {
          return { width: 100, height: 10, top: 0, left: 0, bottom: 0, right: 0 };
        });
  });
  test('<Tags /> component', () => {
    const tags = render(<Provider store={store}><Router><Tags /></Router></Provider>);
    expect(tags).toBeTruthy();
    expect(tags).toMatchSnapshot();
  });

  test("Should register onchange events for the tags field", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, },
      match: { params: { id: null } },
      articleIsViewed, 
      history: { push: jest.fn() },
      setTitle: jest.fn(),
      setArticle: jest.fn(),
      articleTags: articleIsViewed.data.tags,
    }
    const wrapper = mount(<Provider store={storeWithArticle}><Router><Tags {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('#tags')).toHaveLength(1);
    wrapper.find('#tags').simulate('input', { target: { value: 'abcdefg'} });
    wrapper.find('#tags').simulate('input', { keycode: 13 });
  });
});
