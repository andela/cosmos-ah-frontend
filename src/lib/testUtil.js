import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from 'react-testing-library';

const mockStore = configureMockStore();
const store = mockStore({});

const mapPropsToState = function mapStateToProps(state) {
  return { loginState: state.Auth.login };
};


export const renderWithRedux = ui => ({
  ...render(<Provider store={mapPropsToState}>{ui}</Provider>),
  store,
});
