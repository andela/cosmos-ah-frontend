import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Feeds } from '../Feeds';
import { renderWithRedux } from '../../lib/testUtil';

import { mockStoreData } from '../../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

afterEach(cleanup);

const props = {
 articles: [],
 getArticles: jest.fn()   
}

describe('Should render a component', () => {
    test('<Feed /> component is rendered', () => {
        const FeedComponent = render(<Provider store={store}><BrowserRouter><Feeds {...props}/></BrowserRouter></Provider>);
        expect(FeedComponent).toBeTruthy();
        expect(FeedComponent).toMatchSnapshot();
    });
    test('renders the search input', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><BrowserRouter><Feeds {...props}/></BrowserRouter></Provider>);
        expect(getByPlaceholderText('Find the stories you love')).toBeTruthy();
      });
});
