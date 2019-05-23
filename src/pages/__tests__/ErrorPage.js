import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { ErrorPage } from '../ErrorPage';

afterEach(cleanup);

describe('Should render 404 component', () => {
    test('<FourOhFour /> component is rendered', () => {
        const ErrorPageComponent = render(<BrowserRouter><ErrorPage /></BrowserRouter>);
        expect(ErrorPageComponent).toBeTruthy();
        expect(ErrorPageComponent).toMatchSnapshot();
    });
})
