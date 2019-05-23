import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { FourOhFour } from '../FourOhFour';

afterEach(cleanup);

describe('Should render 404 component', () => {
    test('<FourOhFour /> component is rendered', () => {
        const FourOhFourComponent = render(<BrowserRouter><FourOhFour /></BrowserRouter>);
        expect(FourOhFourComponent).toBeTruthy();
        expect(FourOhFourComponent).toMatchSnapshot();
    });
})
