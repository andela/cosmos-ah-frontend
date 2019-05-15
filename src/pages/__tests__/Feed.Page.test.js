import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { Feeds } from '../Feeds';

afterEach(cleanup);

const props = {
 articles: [],
 getArticles: jest.fn()   
}

describe('Should render a component', () => {
    test('<Feed /> component is rendered', () => {
        const FeedComponent = render(<BrowserRouter><Feeds {...props}/></BrowserRouter>);
        expect(FeedComponent).toBeTruthy();
        expect(FeedComponent).toMatchSnapshot();
    });
});
