import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Profile from '../../../pages/Profile';

afterEach(cleanup);

test('should render <Profile /> Page', () => {
    const profilePage = render( < Profile / > );
    expect(profilePage).toBeTruthy();
});