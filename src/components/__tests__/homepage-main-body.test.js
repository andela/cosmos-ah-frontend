import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import HomePageMainBody from '../HomePageMainBody';
import articleMock from '../../__mocks__/article';
import { mockStoreData } from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

test('renders <HomePageMainBody />', () => {
  const homepageMainBody = render(
    <Provider store={store}>
      <Router>
        <HomePageMainBody
          articles={articleMock.articles}
          getArticles={jest.fn()}
        />
      </Router>
    </Provider>
  );
  expect(homepageMainBody).toBeTruthy();
});

test('renders an aside view', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <HomePageMainBody
          articles={articleMock.articles}
          getArticles={jest.fn()}
        />
      </Router>
    </Provider>
  );
  expect(getByText('Popular on Author\'s Haven').parentElement.tagName).toEqual('ASIDE');
});

test('renders a featured heading', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <HomePageMainBody
          articles={articleMock.articles}
          getArticles={jest.fn()}
        />
      </Router>
    </Provider>
  );
  expect(getByText('Featured for members').tagName).toEqual('H3');
});
