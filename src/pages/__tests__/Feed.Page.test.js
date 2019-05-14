import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Feeds from '../Feeds';

afterEach(cleanup);

test('<Feed /> component is rendered', () => {
    const FeedComponent = render(<BrowserRouter><Feeds /></BrowserRouter>);
    expect(FeedComponent).toBeTruthy();
    expect(FeedComponent).toMatchSnapshot();
});
