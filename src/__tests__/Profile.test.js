import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Profile from '../pages/Profile';

import defaultProfileAction, { getUserProfileSuccess, getUserProfileFailure, } from '../state/profile/actions';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../state/profile/actionTypes';
import { mockStoreData } from '../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should test the components', () => {
  test('<Profile /> component', () => {
    const profilePage = render(<Provider store={store}><Router><Profile /></Router></Provider>);
    expect(profilePage).toBeTruthy();
  });
});

describe('PROFILE STATE ACTIONS', () => {
  it('Should create an action for successful retrieval of User Profile', () => {
    const payload = {
      name: 'test'
    };
    const result = {
      type: GET_PROFILE_SUCCESS,
      payload,
    };
    expect(getUserProfileSuccess(payload)).toEqual(result)
  })
});